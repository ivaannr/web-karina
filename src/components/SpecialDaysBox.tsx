
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
    imageUrl: "/lovable-uploads/be3bf591-0909-405b-8626-2ebc1da08259.png",
  },
  {
    id: "3",
    title: "Día especial 3",
    imageUrl: "/lovable-uploads/e30ef090-444a-487c-a606-b60e88fe0031.png",
  },
  {
    id: "4",
    title: "Día especial 4",
    imageUrl: "/lovable-uploads/768bee2f-dc57-4ce4-871a-71784f7ee29c.png",
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
            <DialogContent className="max-w-2xl">
              <div className="text-center">
                <img
                  src={day.imageUrl}
                  alt={day.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
                {day.description && (
                  <p className="text-sm text-gray-600 italic">{day.description}</p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
