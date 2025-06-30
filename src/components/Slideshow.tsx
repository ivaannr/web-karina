
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Images, Heart } from "lucide-react";

const slideshowImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869",
    alt: "Beautiful sunset",
    text: "Si me preguntas que me motiva a levantarme de la cama todos los días"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    alt: "Romantic sunset",
    text: "Probablemente te diga que lo hago porque no puedo quedarme en la cama"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0",
    alt: "Moon in the night sky",
    text: "Pero si me pillas sensible probablemente"
  },
  {
    id: 4,
    src: "/lovable-uploads/5d7bae79-825c-4baa-8956-e74acf0b22f4.png",
    alt: "Nuestra foto especial",
    text: "Probablemente te diga que ella es mi motivo, mi razón de levantarme todos los días de la cama, mi motivo para seguir luchando por lo que me hace ilusión y debo hacer día a día, aunque estemos juntos sigue siendo la inalcanzable, la 10 de 10, la niña mas guapa y risueña del mundo, mi futura mujer y madre de mis hijitos, la mujer con la que pasaré el restos de mis días, con la que me quiero casar. La mejor cosa que me ha pasado ha sido conocerla y tener la oportunidad de poder pasar tiempo con ella, la amo tanto que no sabría que hacer sin ella, por eso, y por ella, me levanto todos los días."
  }
];

export const Slideshow = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Images className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Slideshow</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Momentos y palabras del corazón</p>
      </div>
      
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {slideshowImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center p-6">
                      <p className="text-white text-center text-lg md:text-xl font-medium leading-relaxed shadow-lg">
                        {image.text}
                      </p>
                    </div>
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
