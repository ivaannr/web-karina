
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";

export const CouplesSection = () => {
  const couples = [
    {
      id: 1,
      src: "/lovable-uploads/e31cc7d0-14fc-44a8-9a71-b322ed654162.png",
      alt: "Carl y Ellie de Up - Leyendo juntos",
      title: "Carl y Ellie de Up",
      description: "Como ellos, compartimos momentos tranquilos juntos"
    },
    {
      id: 2,
      src: "/lovable-uploads/bc113e1d-ab68-4225-894d-3479d4c35f54.png",
      alt: "Carl y Ellie de Up - Amor verdadero",
      title: "Carl y Ellie de Up",
      description: "Su historia de amor nos inspira cada día"
    }
  ];

  const simpsonsCouple = [
    {
      id: 3,
      src: "/lovable-uploads/074e212b-7aff-4367-bf4d-b1f8bec1641e.png",
      alt: "Homer y Marge de Los Simpson - Abrazándose",
      title: "Homer y Marge de Los Simpson",
      description: "A pesar de todo, su amor perdura a través de los años"
    },
    {
      id: 4,
      src: "/lovable-uploads/0430d36a-5987-464e-89d8-30e980cfcf47.png",
      alt: "Homer y Marge de Los Simpson - Felices juntos",
      title: "Homer y Marge de Los Simpson",
      description: "Juntos superan cualquier obstáculo"
    },
    {
      id: 5,
      src: "/lovable-uploads/5275c4e7-876d-433e-a25f-df8e6fc7c769.png",
      alt: "Homer y Marge de Los Simpson - En bicicleta",
      title: "Homer y Marge de Los Simpson",
      description: "Disfrutando de la vida juntos"
    }
  ];

  const fairyCouple = [
    {
      id: 6,
      src: "/lovable-uploads/3b309e07-fae9-4636-b66f-4cbad2e4f404.png",
      alt: "Cosmo y Wanda de Los Padrinos Mágicos",
      title: "Cosmo y Wanda",
      description: "Juntos crean magia en cada momento"
    },
    {
      id: 7,
      src: "/lovable-uploads/c323e947-73fc-4b77-b882-cd915943befe.png",
      alt: "Cosmo y Wanda de Los Padrinos Mágicos",
      title: "Cosmo y Wanda",
      description: "Su amor es verdaderamente mágico"
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
      </div>
      
      {/* Carl y Ellie - Primera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

      {/* Homer y Marge - Segunda fila */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {simpsonsCouple.map((couple) => (
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

      {/* Cosmo y Wanda - Tercera fila */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fairyCouple.map((couple) => (
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
