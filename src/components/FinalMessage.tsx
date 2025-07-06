
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Infinity } from "lucide-react";

export const FinalMessage = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
            <Infinity className="h-6 w-6 text-pink-500" />
            <Heart className="h-8 w-8 text-pink-600 animate-pulse" />
          </div>
          
          <h2 className="text-3xl font-bold text-primary mb-6">Para ti, mi amor</h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Esta página es solo una pequeña muestra de todo lo que siento por ti. 
              Cada día a tu lado es un regalo, cada sonrisa tuya es mi motivación.
            </p>
            
            <p>
              Gracias por ser mi compañera de vida, mi mejor amiga, mi amor verdadero. 
              Gracias por amarme tal como soy y por hacer que cada día sea especial.
            </p>
            
            <p className="text-xl font-semibold text-pink-700 mt-6">
              Te amo hoy, te amaré mañana y te amaré para siempre.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-lg font-medium text-gray-600">Con todo mi amor</span>
              <Heart className="h-5 w-5 text-red-500" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
