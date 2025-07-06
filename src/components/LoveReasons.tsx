
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Mail } from "lucide-react";

export const LoveReasons = () => {
  const [openEnvelope, setOpenEnvelope] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      reason: "Tus mimos, besos y abrazos me calman y me hacen sentir bien"
    },
    {
      id: 2,
      reason: "Me haces reír incluso en los momentos más difíciles"
    },
    {
      id: 3,
      reason: "Me apoyas en todo lo que hago y me motiva mucho"
    },
    {
      id: 4,
      reason: "Como me miras y me tratas con tanto cariño y amor"
    },
    {
      id: 5,
      reason: "Lo bien que lo pasamos juntos sin necesidad de hacer nada especial, solo nosotros dos juntos"
    },
    {
      id: 6,
      reason: "Como me entiendes y me ayudas cuando te necesito"
    },
    {
      id: 7,
      reason: "Contigo puedo ser yo mismo sin sentirme juzgado y hacer tonterías junto a ti"
    },
    {
      id: 8,
      reason: "El amor que me tienes, como me quieres me sana y me hace sentir bien"
    },
    {
      id: 9,
      reason: "Porque eres mi hogar, mi paz y mi felicidad"
    }
  ];

  const handleEnvelopeClick = (id: number) => {
    setOpenEnvelope(openEnvelope === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Razones por las que te amo</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((item) => (
          <Card 
            key={item.id} 
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-pink-100 ${
              openEnvelope === item.id ? 'scale-105 shadow-lg' : ''
            }`}
            onClick={() => handleEnvelopeClick(item.id)}
          >
            <CardContent className="p-6 text-center">
              {openEnvelope === item.id ? (
                <div className="animate-fade-in">
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary leading-relaxed">
                    {item.reason}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Mail className="h-16 w-16 text-pink-400 mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Haz clic para abrir
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
