
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  "/lovable-uploads/a2a67c09-9ec3-433a-b72a-5d0e842147c2.png",
  "/lovable-uploads/be3bf591-0909-405b-8626-2ebc1da08259.png",
  "/lovable-uploads/e30ef090-444a-487c-a606-b60e88fe0031.png",
  "/lovable-uploads/768bee2f-dc57-4ce4-871a-71784f7ee29c.png",
  "/lovable-uploads/4af446fe-2c3f-4408-acdc-0bb2e3f1c1cf.png",
  "/lovable-uploads/05081032-b4d5-4139-9e94-606e66f15d9f.png",
  "/lovable-uploads/61cb0031-6bdf-49c7-b7ab-ff9f2b8da5ff.png",
  "/lovable-uploads/c91e3803-56c4-4f3d-a03b-c531adc91012.png",
  "/lovable-uploads/6d2b02e1-7d0f-461c-806e-6f58fe15a403.png",
  "/lovable-uploads/95daac74-f275-4a58-aaef-09818ffb35ed.png",
];

export const PhotoGallery = () => (
  <div className="max-w-2xl mx-auto my-10">
    <h2 className="text-xl font-bold mb-4 text-center">Galería de Fotos</h2>
    <Carousel className="relative">
      <CarouselContent>
        {photos.map((url, idx) => (
          <CarouselItem key={idx}>
            <div className="flex justify-center items-center">
              <img
                src={url}
                alt={`Foto pareja ${idx + 1}`}
                className="rounded-lg shadow-md object-cover max-h-[420px] w-full"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

