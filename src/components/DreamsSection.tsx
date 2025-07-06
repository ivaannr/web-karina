import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Home, Baby, Plane } from "lucide-react";

export const DreamsSection = () => {
  const dreams = [
    {
      id: 1,
      icon: Heart,
      title: "Casarnos",
      description: "Prometernos amor eterno ante todos"
    },
    {
      id: 2,
      icon: Home,
      title: "Nuestro hogar",
      description: "Crear un espacio lleno de amor y risas"
    },
    {
      id: 3,
      icon: Baby,
      title: "Formar una familia",
      description: "Llenar nuestra casa de pequeñas risas"
    },
    {
      id: 4,
      icon: Plane,
      title: "Viajar juntos",
      description: "Conocer el mundo de la mano"
    },
    {
      id: 5,
      icon: Star,
      title: "Envejecer juntos",
      description: "Ser felices hasta el último día"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Nuestros Sueños Juntos</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Los planes que tenemos para nuestro futuro</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dreams.slice(0, 3).map((dream) => (
          <Card key={dream.id} className="hover:shadow-lg transition-all duration-300 border-pink-100">
            <CardContent className="p-6 text-center">
              <dream.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{dream.title}</h3>
              <p className="text-muted-foreground">{dream.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
        {dreams.slice(3).map((dream) => (
          <Card key={dream.id} className="hover:shadow-lg transition-all duration-300 border-pink-100">
            <CardContent className="p-6 text-center">
              <dream.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">{dream.title}</h3>
              <p className="text-muted-foreground">{dream.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
