
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart } from "lucide-react";

export const SpainMapSection = () => {
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
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-xl font-semibold text-primary mb-4">Mapa de España</h3>
            <p className="text-muted-foreground mb-6">
              Aquí marcaremos todos los lugares especiales que queremos visitar juntos
            </p>
            <div className="bg-pink-50 rounded-lg p-6 text-center">
              <p className="text-pink-700 font-medium">
                ¡Cuéntame qué lugares quieres que marquemos en el mapa! 📍
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
