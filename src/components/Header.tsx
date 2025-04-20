
import { format, differenceInDays } from "date-fns";
import { es } from "date-fns/locale";
import { useRelationship } from "@/context/RelationshipContext";
import { Heart } from "lucide-react";

export const Header = () => {
  const { startDate } = useRelationship();
  
  // Calcular la cantidad de días desde el inicio de la relación
  const daysCount = differenceInDays(new Date(), startDate);
  
  return (
    <div className="w-full bg-gradient-to-r from-love-pink to-love-purple py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-white bg-opacity-25 rounded-full p-3 mb-4">
          <Heart className="h-8 w-8 text-white fill-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Nuestro Año Juntos
        </h1>
        
        <p className="text-xl text-white/90 mb-6">
          {format(startDate, "'Desde el' d 'de' MMMM 'de' yyyy", { locale: es })}
        </p>
        
        <div className="bg-white rounded-lg shadow-lg py-6 px-8 inline-block">
          <span className="block text-3xl font-bold text-primary">{daysCount} días</span>
          <span className="text-muted-foreground">de amor</span>
        </div>
      </div>
    </div>
  );
};
