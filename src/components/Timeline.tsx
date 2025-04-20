
import { useRelationship } from "@/context/RelationshipContext";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Heart, Star, Calendar, Gift, Image, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const iconsMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-6 w-6 text-primary" />,
  star: <Star className="h-6 w-6 text-love-yellow" />,
  calendar: <Calendar className="h-6 w-6 text-love-blue" />,
  gift: <Gift className="h-6 w-6 text-love-pink" />,
  image: <Image className="h-6 w-6 text-love-purple" />,
  award: <Award className="h-6 w-6 text-love-green" />,
};

export const Timeline = () => {
  const { timelineEvents, addTimelineEvent } = useRelationship();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: format(new Date(), "yyyy-MM-dd"),
    description: "",
    icon: "heart",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewEvent((prev) => ({ ...prev, icon: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTimelineEvent(newEvent);
    setNewEvent({
      title: "",
      date: format(new Date(), "yyyy-MM-dd"),
      description: "",
      icon: "heart",
    });
    setIsDialogOpen(false);
  };

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "d 'de' MMMM, yyyy", { locale: es });
  };

  // Ordenar los eventos por fecha
  const sortedEvents = [...timelineEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Nuestra Historia</h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">Nuevo Evento</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Añadir un evento a la línea del tiempo</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Título</label>
                <Input
                  id="title"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Título del evento"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Fecha</label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Descripción</label>
                <Textarea
                  id="description"
                  name="description"
                  value={newEvent.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe este momento especial"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="icon" className="text-sm font-medium">Ícono</label>
                <Select value={newEvent.icon} onValueChange={handleSelectChange}>
                  <SelectTrigger id="icon">
                    <SelectValue placeholder="Selecciona un ícono" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="heart">Corazón</SelectItem>
                    <SelectItem value="star">Estrella</SelectItem>
                    <SelectItem value="calendar">Calendario</SelectItem>
                    <SelectItem value="gift">Regalo</SelectItem>
                    <SelectItem value="image">Imagen</SelectItem>
                    <SelectItem value="award">Premio</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary/90">Guardar Evento</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="relative">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
        
        <div className="space-y-8 relative">
          {sortedEvents.map((event, index) => (
            <div
              key={event.id}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Contenido */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <h3 className="text-lg font-medium">{event.title}</h3>
                <time className="text-sm text-muted-foreground">{formatDate(event.date)}</time>
                <p className="mt-2 text-muted-foreground">{event.description}</p>
              </div>
              
              {/* Punto central con icono */}
              <div className="w-2/12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-background shadow-md border-2 border-primary flex items-center justify-center z-10">
                  {event.icon && iconsMap[event.icon]}
                </div>
              </div>
              
              {/* Espacio para mantener alineación */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
