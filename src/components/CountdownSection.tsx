
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Clock } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

interface CountdownCardProps {
  targetDate: Date;
  years: number;
  title: string;
}

const CountdownCard = ({ targetDate, years, title }: CountdownCardProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-pink-100">
      <CardContent className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h3 className="text-xl font-bold text-primary">{title}</h3>
        </div>
        
        <div className="flex items-center justify-center gap-1 mb-4 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>7 de marzo de {targetDate.getFullYear()}</span>
        </div>
        
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-pink-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.days}</div>
            <div className="text-xs text-muted-foreground">días</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.hours}</div>
            <div className="text-xs text-muted-foreground">horas</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.minutes}</div>
            <div className="text-xs text-muted-foreground">min</div>
          </div>
          <div className="bg-pink-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-pink-600">{timeLeft.seconds}</div>
            <div className="text-xs text-muted-foreground">seg</div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-1 text-sm font-medium text-pink-600">
          <Clock className="h-4 w-4" />
          <span>{years} años de amor</span>
        </div>
      </CardContent>
    </Card>
  );
};

export const CountdownSection = () => {
  const countdowns = [
    {
      targetDate: new Date(2026, 2, 7), // 7 de marzo de 2026
      years: 2,
      title: "2 Años Juntos"
    },
    {
      targetDate: new Date(2029, 2, 7), // 7 de marzo de 2029
      years: 5,
      title: "5 Años Juntos"
    },
    {
      targetDate: new Date(2034, 2, 7), // 7 de marzo de 2034
      years: 10,
      title: "10 Años Juntos"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Contando los Días</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Esperando nuestros próximos aniversarios</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countdowns.map((countdown, index) => (
          <CountdownCard
            key={index}
            targetDate={countdown.targetDate}
            years={countdown.years}
            title={countdown.title}
          />
        ))}
      </div>
    </div>
  );
};
