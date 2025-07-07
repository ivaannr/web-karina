
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, RotateCcw } from 'lucide-react';

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

const TETROMINOS = {
  I: [
    [1, 1, 1, 1]
  ],
  O: [
    [1, 1],
    [1, 1]
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1]
  ],
  L: [
    [1, 0, 0],
    [1, 1, 1]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1]
  ]
};

export const Tetris = () => {
  const [board, setBoard] = useState(() => 
    Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0))
  );
  const [currentPiece, setCurrentPiece] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const createRandomPiece = () => {
    const pieces = Object.keys(TETROMINOS);
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    return {
      shape: TETROMINOS[randomPiece as keyof typeof TETROMINOS],
      x: Math.floor(BOARD_WIDTH / 2) - 1,
      y: 0
    };
  };

  const resetGame = () => {
    setBoard(Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill(0)));
    setCurrentPiece(null);
    setScore(0);
    setGameOver(false);
    setIsPlaying(false);
  };

  const startGame = () => {
    if (gameOver) {
      resetGame();
    }
    setCurrentPiece(createRandomPiece());
    setIsPlaying(true);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Tetris del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4">
        <p className="text-lg">Puntuación: <span className="text-pink-600 font-semibold">{score}</span></p>
      </div>

      <div className="w-64 h-80 mx-auto mb-4 bg-pink-50 border-2 border-pink-200 rounded-lg relative overflow-hidden">
        <div className="grid grid-cols-10 h-full">
          {board.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${y}-${x}`}
                className={`border border-pink-100 ${
                  cell ? 'bg-pink-400' : 'bg-transparent'
                }`}
              />
            ))
          )}
        </div>
        
        {gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-pink-700 mb-2">¡Juego Terminado!</p>
              <p className="text-pink-600">Puntuación: {score}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {!isPlaying ? (
          <Button onClick={startGame} className="bg-pink-500 hover:bg-pink-600">
            <Play className="w-4 h-4 mr-1" />
            {gameOver ? 'Reiniciar' : 'Jugar'}
          </Button>
        ) : (
          <Button onClick={() => setIsPlaying(false)} variant="outline">
            <Pause className="w-4 h-4 mr-1" />
            Pausar
          </Button>
        )}
        <Button onClick={resetGame} variant="outline">
          <RotateCcw className="w-4 h-4 mr-1" />
          Reset
        </Button>
      </div>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Usa las teclas de flecha para mover y rotar</p>
      </div>
    </div>
  );
};
