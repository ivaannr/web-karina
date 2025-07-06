
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, RotateCcw } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(generateFood());
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    setIsPlaying(false);
  };

  const checkCollision = (head: Position, snakeBody: Position[]) => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    return snakeBody.some(segment => segment.x === head.x && segment.y === head.y);
  };

  const moveSnake = useCallback(() => {
    if (!isPlaying || isGameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      if (checkCollision(head, newSnake)) {
        setIsGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore(prev => prev + 10);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, isPlaying, isGameOver, food, generateFood]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  const startGame = () => {
    if (isGameOver) {
      resetGame();
    }
    setIsPlaying(true);
  };

  const pauseGame = () => {
    setIsPlaying(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="h-6 w-6 text-pink-600" />
          <h2 className="text-2xl font-bold text-primary">Juego de la Serpiente del Amor</h2>
          <Heart className="h-6 w-6 text-pink-600" />
        </div>
        <p className="text-muted-foreground">¡Recolecta corazones y haz crecer tu serpiente de amor!</p>
      </div>

      <Card className="border-pink-100">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">
              Puntuación: <span className="text-pink-600">{score}</span>
            </div>
            <div className="flex gap-2">
              {!isPlaying ? (
                <Button onClick={startGame} className="bg-pink-500 hover:bg-pink-600">
                  <Play className="w-4 h-4 mr-1" />
                  {isGameOver ? 'Reiniciar' : 'Jugar'}
                </Button>
              ) : (
                <Button onClick={pauseGame} variant="outline">
                  <Pause className="w-4 h-4 mr-1" />
                  Pausar
                </Button>
              )}
              <Button onClick={resetGame} variant="outline">
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>

          <div 
            className="relative bg-pink-50 rounded-lg border-2 border-pink-200 mx-auto"
            style={{
              width: `${GRID_SIZE * 20}px`,
              height: `${GRID_SIZE * 20}px`,
            }}
          >
            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className={`absolute ${
                  index === 0 ? 'bg-pink-600' : 'bg-pink-400'
                } rounded-sm transition-all duration-75`}
                style={{
                  left: `${segment.x * 20}px`,
                  top: `${segment.y * 20}px`,
                  width: '18px',
                  height: '18px',
                }}
              />
            ))}

            {/* Food (Heart) */}
            <div
              className="absolute text-lg flex items-center justify-center"
              style={{
                left: `${food.x * 20}px`,
                top: `${food.y * 20}px`,
                width: '20px',
                height: '20px',
              }}
            >
              💞
            </div>
          </div>

          {isGameOver && (
            <div className="text-center mt-4 p-4 bg-pink-100 rounded-lg">
              <h3 className="text-lg font-bold text-pink-700 mb-2">¡Juego Terminado!</h3>
              <p className="text-pink-600">Puntuación final: {score}</p>
            </div>
          )}

          <div className="mt-4 text-center text-sm text-muted-foreground">
            <p>Usa las teclas de flecha para controlar la serpiente</p>
            <p>¡Recolecta los corazones 💞 para ganar puntos!</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
