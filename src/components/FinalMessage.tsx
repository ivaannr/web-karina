
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
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-4 text-left">
            <p>
              Esta página es solo una pequeña muestra de todo lo que siento por ti. Me motivas a hacer cosas como estas por ti, por que te amo y me encanta dedicar tiempo a algo que te voy a dar.
            </p>
            
            <p>
              Eres el amor de mi vida, y quiero durar para SIEMPRE contigo, mi niña. Gracias por amarme tal como soy y por hacer que cada día sea especial.
            </p>
            
            <p>
              Eres una mujercita genial y muy especial para mi, lo sabes, te adoro. De verdad que eres muy muy importante y quiero que tengamos un futuro genial juntos formar una familia, tener nuestra casita y vivir tranquilos hasta ser viejitos.
            </p>
            
            <p>
              Puede que a veces tengamos problemas, pero ya sabes y como te digo siempre, los solucionamos juntitos y en equipo.
            </p>
            
            <p>
              Gracias por ser tan buena conmigo, tus besitos, abrazos y mimos me hacen sentir muy bien y me motivan a levantarme todos los días.
            </p>
            
            <p>
              Ay, eres tan perfecta mi niña, espero que disfrutes de esta página web, le he puesto mucho trabajo y esfuerzo detrás y espero que te guste, te mereces esto y más.
            </p>
            
            <p className="text-xl font-semibold text-pink-700 mt-6 text-center">
              Te amo hoy, te amaré mañana y te amaré siempre.
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
