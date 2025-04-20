
import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getMonth, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { useRelationship } from "@/context/RelationshipContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const moodColors = {
  amazing: "bg-love-romantic",
  good: "bg-love-pink",
  neutral: "bg-love-yellow",
  bad: "bg-love-blue",
  terrible: "bg-love-green",
  "": "bg-secondary hover:bg-secondary/80",
};

type MoodType = keyof typeof moodColors;

export const PixelGrid = () => {
  const { startDate, daysData, setDayMood, setDayNote } = useRelationship();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [noteText, setNoteText] = useState<string>("");
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const monthsInYear = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(startDate.getFullYear(), i, 1);
    return {
      month: i,
      name: format(date, "MMMM", { locale: es }),
      days: eachDayOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date),
      }),
    };
  });

  const handleDayClick = (date: string) => {
    setSelectedDate(date);
    setNoteText(daysData[date]?.note || "");
    setShowDialog(true);
  };

  const handleMoodSelect = (date: string, mood: MoodType) => {
    setDayMood(date, mood);
  };

  const handleSaveNote = () => {
    if (selectedDate) {
      setDayNote(selectedDate, noteText);
      setShowDialog(false);
    }
  };

  const formatDateForDisplay = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestro Año en Píxeles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {monthsInYear.map(({ month, name, days }) => (
          <div key={month} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-medium text-center capitalize mb-4">{name}</h3>
            
            <div 
              className="grid grid-cols-7 gap-1"
              style={{ 
                gridTemplateRows: `repeat(${Math.ceil(days.length / 7)}, 1fr)` 
              }}
            >
              {/* Day headers */}
              {["D", "L", "M", "X", "J", "V", "S"].map((day, i) => (
                <div key={i} className="h-6 flex items-center justify-center text-xs text-gray-500">
                  {day}
                </div>
              ))}
              
              {/* Empty cells for proper alignment */}
              {Array.from({ length: getDay(days[0]) }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square"></div>
              ))}
              
              {/* Days */}
              {days.map((day) => {
                const dateStr = format(day, "yyyy-MM-dd");
                const dayData = daysData[dateStr];
                const mood = dayData?.mood || "";
                
                return (
                  <TooltipProvider key={dateStr}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => handleDayClick(dateStr)}
                          className={`aspect-square rounded-md text-xs flex items-center justify-center ${
                            moodColors[mood as MoodType] || "bg-secondary hover:bg-secondary/80"
                          } transition-colors`}
                        >
                          {day.getDate()}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom">
                        <p>{formatDateForDisplay(dateStr)}</p>
                        {dayData?.note && <p className="text-xs italic">{dayData.note}</p>}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedDate ? formatDateForDisplay(selectedDate) : "Selecciona un día"}</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(moodColors).map(([mood, colorClass]) => (
                mood !== "" && (
                  <button
                    key={mood}
                    onClick={() => handleMoodSelect(selectedDate, mood as MoodType)}
                    className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center ${
                      daysData[selectedDate]?.mood === mood ? "ring-2 ring-primary" : ""
                    }`}
                    title={mood}
                  >
                    {mood === "amazing" && "😍"}
                    {mood === "good" && "😊"}
                    {mood === "neutral" && "😐"}
                    {mood === "bad" && "😔"}
                    {mood === "terrible" && "😢"}
                  </button>
                )
              ))}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="note" className="text-sm font-medium">
                Nota para este día:
              </label>
              <Textarea
                id="note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="¿Qué sucedió este día especial?"
                className="min-h-[100px]"
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSaveNote} className="bg-primary hover:bg-primary/90">
              Guardar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
