
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { SnakeGame } from './SnakeGame';
import { TicTacToe } from './games/TicTacToe';
import { Tetris } from './games/Tetris';
import { MemoryGame } from './games/MemoryGame';

const games = [
  {
    id: 'snake',
    name: 'Serpiente del Amor',
    component: SnakeGame,
  },
  {
    id: 'tictactoe',
    name: 'Tres en Raya',
    component: TicTacToe,
  },
  {
    id: 'tetris',
    name: 'Tetris',
    component: Tetris,
  },
  {
    id: 'memory',
    name: 'Memoria',
    component: MemoryGame,
  },
];

export const GamesSection = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  const nextGame = () => {
    setCurrentGameIndex((prev) => (prev + 1) % games.length);
  };

  const prevGame = () => {
    setCurrentGameIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  const CurrentGameComponent = games[currentGameIndex].component;

  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Juegos del Amor</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">¡Diviértete con nuestros juegos especiales!</p>
      </div>

      <Card className="border-pink-100">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <Button
              onClick={prevGame}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="text-center">
              <h3 className="text-lg font-semibold text-pink-600">
                {games[currentGameIndex].name}
              </h3>
              <div className="flex gap-2 mt-2 justify-center">
                {games.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentGameIndex ? 'bg-pink-500' : 'bg-pink-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <Button
              onClick={nextGame}
              variant="outline"
              size="icon"
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="min-h-[400px] flex items-center justify-center">
            <CurrentGameComponent />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
