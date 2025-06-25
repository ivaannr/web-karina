
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

interface SpecialDay {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

const specialDays: SpecialDay[] = [
  {
    id: "1",
    title: "Día especial 1",
    imageUrl: "/lovable-uploads/0c2669e4-75e4-4398-a75a-7af76c3da524.png",
    description: "Este día dimos una vuelta para luego ir a ver a mis abuelitos y en su portal nos tomamos esta foto"
  },
  {
    id: "2",
    title: "Día especial 2",
    imageUrl: "/lovable-uploads/81248694-8828-4184-b38a-44da42d1b9bd.png",
    description: "nosotros con una mascarilla haciendonos el skincare 💅💅"
  },
  {
    id: "3",
    title: "Día especial 3",
    imageUrl: "/lovable-uploads/8cc61d37-f7fd-4475-bb7f-52b76e118b9d.png",
    description: "SAN VALENTÍN, pasamos el día juntitos para luego cocinar juntos tambien una cena muy rica"
  },
  {
    id: "4",
    title: "Día especial 4",
    imageUrl: "/lovable-uploads/437a814c-7066-4be8-a1e0-ef0b1cfa0d78.png",
    description: "fuimos a cenar juntos al doce mas uno la hamburguesa super picante y sufrimos como putos pero lo pasamos muy bien"
  },
];

export const SpecialDaysBox = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-xl font-bold mb-6 text-center">Días Especiales</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {specialDays.map((day) => (
          <Dialog key={day.id}>
            <DialogTrigger asChild>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-sm">{day.title}</h3>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="text-center">
                <img
                  src={day.imageUrl}
                  alt={day.title}
                  className="w-full max-w-full h-auto max-h-[60vh] object-contain rounded-lg mb-4 mx-auto"
                />
                {day.description && (
                  <p className="text-sm text-gray-600 italic max-h-[20vh] overflow-y-auto">{day.description}</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
