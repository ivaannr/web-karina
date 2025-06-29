
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Heart, Play } from "lucide-react";

interface Song {
  id: string;
  title: string;
  artist: string;
  reason: string;
  emoji: string;
  image: string;
}

const songs: Song[] = [
  {
    id: "1",
    title: "M.A.I",
    artist: "MILO J",
    reason: "Esta canción me recuerda a ti",
    emoji: "🎵",
    image: "/lovable-uploads/03fa8bbb-5149-4120-ae45-ee4d77eb1ac9.png"
  },
  {
    id: "2", 
    title: "MIL VIDAS",
    artist: "MORA",
    reason: "Viviría mil vidas contigo",
    emoji: "💫",
    image: "/lovable-uploads/35efcab4-b598-4b32-a406-0595e5f0d273.png"
  },
  {
    id: "3",
    title: "BARRO",
    artist: "DUKI", 
    reason: "Juntos superamos todo",
    emoji: "🔥",
    image: "/lovable-uploads/bc7ef4c1-d132-4e3e-9714-6eb44693100c.png"
  },
  {
    id: "4",
    title: "ACELERÁ",
    artist: "LUCHO RK",
    reason: "Aceleras mi corazón",
    emoji: "💨",
    image: "/lovable-uploads/dcfa71d5-e64c-4f3d-ba1e-4fa05f8fd450.png"
  },
  {
    id: "5",
    title: "IVY",
    artist: "FRANK OCEAN",
    reason: "Eres mi inspiración",
    emoji: "🌿",
    image: "/lovable-uploads/b625d90b-2683-4245-9034-edeeb5a27729.png"
  },
  {
    id: "6",
    title: "NOTA",
    artist: "JAY WHEELER",
    reason: "Eres mi nota perfecta",
    emoji: "🎼",
    image: "/lovable-uploads/a6d49180-6d15-40bb-b9f6-1861c40f19b0.png"
  }
];

export const SongsSection = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Music className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Canciones que me recuerdan a ti</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Cada melodía cuenta nuestra historia</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song) => (
          <Card key={song.id} className="hover:shadow-lg transition-shadow duration-300 border-pink-100 overflow-hidden">
            <div className="aspect-square relative">
              <img 
                src={song.image} 
                alt={`${song.title} - ${song.artist}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-pink-500 text-white p-2 rounded-full">
                <Play className="h-4 w-4" />
              </div>
            </div>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="text-2xl">{song.emoji}</span>
                    {song.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    por {song.artist}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 italic">
                "{song.reason}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          <Music className="h-4 w-4" />
          Cada canción tiene su momento especial en nuestra historia
          <Heart className="h-4 w-4 text-pink-500" />
        </p>
      </div>
    </div>
  );
};
