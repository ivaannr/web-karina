
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

export const CouplesSection = () => {
  const couples = [
    {
      id: 1,
      src: "/lovable-uploads/e31cc7d0-14fc-44a8-9a71-b322ed654162.png",
      alt: "Carl y Ellie de Up - Leyendo juntos",
      title: "Carl y Ellie",
      description: "Como ellos, compartimos momentos tranquilos juntos"
    },
    {
      id: 2,
      src: "/lovable-uploads/bc113e1d-ab68-4225-894d-3479d4c35f54.png",
      alt: "Carl y Ellie de Up - Amor verdadero",
      title: "Un amor para toda la vida",
      description: "Su historia de amor nos inspira cada día"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Parejas que me recuerdan a nosotros</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Historias de amor que nos inspiran</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {couples.map((couple) => (
          <Card key={couple.id} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
            <CardContent className="p-0">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={couple.src} 
                  alt={couple.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle className="text-xl text-center">{couple.title}</CardTitle>
              <p className="text-muted-foreground text-center">{couple.description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
