
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Heart, Calendar } from "lucide-react";

export const BucketList = () => {
  const bucketListItems = [
    {
      id: "1",
      title: "Viajar juntos a cualquier lugar",
      description: "Siempre hemos querido viajar juntos",
      icon: "✈️"
    },
    {
      id: "2", 
      title: "Crear una familia juntos",
      description: "Tener nuestros hijitos y vivir juntos en nuestra propia casa",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      id: "3",
      title: "Ver el amanecer juntos",
      description: "Nosotros solos y tranquilidad absoluta",
      icon: "🌅"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Bucket List</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Planes para nuestro futuro juntos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bucketListItems.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300 border-pink-100 text-center">
            <CardHeader>
              <div className="text-4xl mb-2">{item.icon}</div>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="mt-4 flex items-center justify-center gap-1">
                <Calendar className="h-4 w-4 text-pink-500" />
                <span className="text-sm text-pink-600 font-medium">Pronto...</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
