
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Images, Heart } from "lucide-react";

const slideshowImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    alt: "Romantic sunset over ocean waves"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    alt: "Beautiful starry night sky"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    alt: "Peaceful nature scene with deer"
  }
];

export const Slideshow = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Images className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Galería de Momentos</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Imágenes que nos inspiran</p>
      </div>
      
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {slideshowImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
