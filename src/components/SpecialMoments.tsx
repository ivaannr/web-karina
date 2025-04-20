
import { useRelationship } from "@/context/RelationshipContext";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { CalendarHeart } from "lucide-react";

export const SpecialMoments = () => {
  const { specialMoments, addSpecialMoment } = useRelationship();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMoment, setNewMoment] = useState({
    title: "",
    date: format(new Date(), "yyyy-MM-dd"),
    description: "",
    imageUrl: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMoment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSpecialMoment(newMoment);
    setNewMoment({
      title: "",
      date: format(new Date(), "yyyy-MM-dd"),
      description: "",
      imageUrl: "",
    });
    setIsDialogOpen(false);
  };

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "d 'de' MMMM, yyyy", { locale: es });
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Momentos Especiales</h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <CalendarHeart className="mr-2 h-4 w-4" /> Nuevo Momento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Añadir un momento especial</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Título</label>
                <Input
                  id="title"
                  name="title"
                  value={newMoment.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Título del momento especial"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Fecha</label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={newMoment.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Descripción</label>
                <Textarea
                  id="description"
                  name="description"
                  value={newMoment.description}
                  onChange={handleInputChange}
                  required
                  placeholder="¿Qué hace especial este momento?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="imageUrl" className="text-sm font-medium">URL de la imagen</label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  value={newMoment.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary hover:bg-primary/90">Guardar Momento</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specialMoments.map((moment) => (
          <Card key={moment.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            {moment.imageUrl && (
              <AspectRatio ratio={16 / 9}>
                <img
                  src={moment.imageUrl}
                  alt={moment.title}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            )}
            
            <CardHeader>
              <CardTitle>{moment.title}</CardTitle>
              <CardDescription>{formatDate(moment.date)}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground">{moment.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
