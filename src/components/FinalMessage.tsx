
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Infinity } from "lucide-react";

export const FinalMessage = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 shadow-lg">
        <CardContent className="p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Heart className="h-10 w-10 text-pink-600 animate-pulse" />
            <Infinity className="h-8 w-8 text-pink-500" />
            <Heart className="h-10 w-10 text-pink-600 animate-pulse" />
          </div>
          
          <h2 className="text-4xl font-bold text-primary mb-8 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Para ti, mi amor
          </h2>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-3xl mx-auto">
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Esta página es solo una pequeña muestra de todo lo que siento por ti. Me motivas a hacer cosas como estas por ti, por que te amo y me encanta dedicar tiempo a algo que te voy a dar.
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Eres el amor de mi vida, y quiero durar para SIEMPRE contigo, mi niña. Gracias por amarme tal como soy y por hacer que cada día sea especial.
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Eres una mujercita genial y muy especial para mi, lo sabes, te adoro. De verdad que eres muy muy importante y quiero que tengamos un futuro genial juntos formar una familia, tener nuestra casita y vivir tranquilos hasta ser viejitos.
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Puede que a veces tengamos problemas, pero ya sabes y como te digo siempre, los solucionamos juntitos y en equipo.
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Gracias por ser tan buena conmigo, tus besitos, abrazos y mimos me hacen sentir muy bien y me motivan a levantarme todos los días.
              </p>
            </div>
            
            <div className="bg-white/50 rounded-lg p-6 backdrop-blur-sm border border-pink-100">
              <p className="text-left">
                Ay, eres tan perfecta mi niña, espero que disfrutes de esta página web, le he puesto mucho trabajo y esfuerzo detrás y espero que te guste, te mereces esto y más.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg p-8 mt-8 border-2 border-pink-200">
              <p className="text-2xl font-bold text-pink-700 mb-4">
                Te amo hoy, te amaré mañana y te amaré siempre.
              </p>
              
              <div className="flex items-center justify-center gap-3 mt-6">
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
                <span className="text-xl font-semibold text-gray-700">Con todo mi amor</span>
                <Heart className="h-6 w-6 text-red-500 animate-pulse" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
