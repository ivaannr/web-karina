
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";

export const SpainMapSection = () => {
  const places = [
    {
      name: "Burela",
      region: "Galicia",
      emoji: "🌊"
    },
    {
      name: "Madrid",
      region: "Comunidad de Madrid",
      emoji: "🏛️"
    },
    {
      name: "Barcelona",
      region: "Cataluña",
      emoji: "🏖️"
    },
    {
      name: "Avilés",
      region: "Asturias",
      emoji: "🏭"
    },
    {
      name: "Candás",
      region: "Asturias",
      emoji: "🐟"
    },
    {
      name: "A Coruña",
      region: "Galicia",
      emoji: "🗼"
    },
    {
      name: "Bilbao",
      region: "País Vasco",
      emoji: "🏭"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Lugares que Visitar en España</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Nuestros próximos destinos por descubrir</p>
      </div>
      
      <Card className="border-pink-100">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {places.map((place, index) => (
              <div key={index} className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{place.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-primary">{place.name}</h4>
                    <p className="text-sm text-muted-foreground">{place.region}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏔️</span>
                <div>
                  <h4 className="font-semibold text-primary">Pueblitos pequeños de Asturias</h4>
                  <p className="text-sm text-muted-foreground">Asturias</p>
                </div>
              </div>
            </div>
            <div className="bg-pink-50 rounded-lg p-4 hover:bg-pink-100 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h4 className="font-semibold text-primary">Grecia</h4>
                  <p className="text-sm text-muted-foreground">Europa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-pink-50 rounded-lg p-6 text-center">
            <p className="text-pink-700 font-medium">
              ¡Cada lugar será una nueva aventura juntos! 💕
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
