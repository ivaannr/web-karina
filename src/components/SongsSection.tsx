
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Heart, Play } from "lucide-react";

interface Song {
  id: string;
  title: string;
  artist: string;
  reason: string;
  emoji: string;
}

const songs: Song[] = [
  {
    id: "1",
    title: "Perfect",
    artist: "Ed Sheeran",
    reason: "Me recuerda a cuando bailamos por primera vez",
    emoji: "💃"
  },
  {
    id: "2",
    title: "All of Me",
    artist: "John Legend",
    reason: "Porque amas cada parte de mí",
    emoji: "💕"
  },
  {
    id: "3",
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    reason: "Nuestra canción de los momentos tranquilos",
    emoji: "🌙"
  },
  {
    id: "4",
    title: "Make You Feel My Love",
    artist: "Adele",
    reason: "Expresa todo lo que siento por ti",
    emoji: "❤️"
  },
  {
    id: "5",
    title: "Can't Help Myself",
    artist: "Four Tops",
    reason: "No puedo evitar enamorarme más cada día",
    emoji: "😍"
  },
  {
    id: "6",
    title: "At Last",
    artist: "Etta James",
    reason: "Por fin encontré mi media naranja",
    emoji: "🍊"
  }
];

export const SongsSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Music className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Canciones que me recuerdan a ti</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">Cada melodía cuenta nuestra historia</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {songs.map((song) => (
          <Card key={song.id} className="hover:shadow-lg transition-shadow duration-300 border-pink-100">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Play className="h-4 w-4 text-pink-500" />
                    {song.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    por {song.artist}
                  </p>
                </div>
                <span className="text-2xl">{song.emoji}</span>
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
