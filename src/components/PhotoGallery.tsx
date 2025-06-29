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
  "/lovable-uploads/46688a7c-86dd-4f81-8119-2d47aab5e8c7.png",
  "/lovable-uploads/a9dd73f8-364a-4c0a-adac-459b47e9a9db.png",
  "/lovable-uploads/c6ec1842-c5e2-42d3-9f58-61314011e781.png",
  "/lovable-uploads/7cbbe655-456e-411c-bb49-3cd0b7a2e8e0.png",
  "/lovable-uploads/4e918554-680e-492a-9e1e-0a6055dc031b.png",
  "/lovable-uploads/3b697394-af43-42e7-a84a-9e7415edcf50.png",
  "/lovable-uploads/6becea6e-1ad4-40b0-a045-47d6f90c3fe1.png",
  "/lovable-uploads/0b342415-226d-4b31-8201-5445b34adeb2.png",
  "/lovable-uploads/a1632d83-ee39-43f6-bdd7-5805e5b08e05.png",
  "/lovable-uploads/15269eec-bd2d-4346-8ddb-c607bb5806b5.png",
  "/lovable-uploads/e8d1e0b4-f890-4ed2-af52-8f52dd6f18b5.png",
  "/lovable-uploads/1abbb97a-deb5-4ba4-8820-3819cfe60024.png",
  "/lovable-uploads/8b6ee2ba-2836-4fa1-a1b9-c37eb2870275.png",
  "/lovable-uploads/584b7622-2ec3-4a68-abb2-49ab24e1847e.png",
  "/lovable-uploads/c4c8be9b-d775-4a36-819e-8a69e9b9ca5d.png",
  "/lovable-uploads/a42535cb-79b8-44ec-ae96-dea296bfea28.png",
  "/lovable-uploads/8a8172ba-bf0f-46c7-bb4e-6fdb15286212.png",
  "/lovable-uploads/0e4a4d30-4af2-4e89-8f0b-13cbe54e00b8.png",
  "/lovable-uploads/e0c55d2d-3a73-4f61-9d9a-1e66eafcb454.png",
  "/lovable-uploads/fe2efc8c-e4a4-48de-849b-65aa289d336e.png",
  "/lovable-uploads/b9cc496c-390f-483a-9b32-dcfbd52ea70e.png",
  "/lovable-uploads/9a3caab4-254a-44c1-9efd-2f9ce1888234.png",
  "/lovable-uploads/53a33b7c-8517-406a-a254-bbd50adbfbb9.png",
  "/lovable-uploads/daa6771b-f451-4fc2-98e1-69762090cafd.png",
  "/lovable-uploads/05d00d56-5fe5-45db-b24e-914e530aa71b.png",
  "/lovable-uploads/8067f296-75cd-4ac7-8e5a-19655532dc9b.png",
  "/lovable-uploads/9f7843e4-8e8f-414a-8b91-64d50b4f9b3d.png",
  "/lovable-uploads/818f2f4d-0a91-482d-b684-628dd98be406.png",
  "/lovable-uploads/a6686506-6c02-4d3a-8fa2-f0034480cfd4.png",
  "/lovable-uploads/fb0d5620-6eef-4fa5-a0c5-98e1cc44f9ec.png",
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
