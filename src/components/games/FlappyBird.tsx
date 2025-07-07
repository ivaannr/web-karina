
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, RotateCcw } from 'lucide-react';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 300;
const BIRD_SIZE = 20;
const PIPE_WIDTH = 50;
const PIPE_GAP = 100;

export const FlappyBird = () => {
  const [gameState, setGameState] = useState({
    bird: { x: 100, y: CANVAS_HEIGHT / 2, velocity: 0 },
    pipes: [] as Array<{ x: number; topHeight: number; bottomY: number; passed: boolean }>,
    score: 0,
    isPlaying: false,
    gameOver: false
  });

  const resetGame = () => {
    setGameState({
      bird: { x: 100, y: CANVAS_HEIGHT / 2, velocity: 0 },
      pipes: [],
      score: 0,
      isPlaying: false,
      gameOver: false
    });
  };

  const startGame = () => {
    if (gameState.gameOver) {
      resetGame();
    }
    setGameState(prev => ({ ...prev, isPlaying: true }));
  };

  const pauseGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: false }));
  };

  const jump = () => {
    if (!gameState.isPlaying || gameState.gameOver) return;
    
    setGameState(prev => ({
      ...prev,
      bird: { ...prev.bird, velocity: -8 }
    }));
  };

  const generatePipe = (x: number) => {
    const topHeight = Math.random() * (CANVAS_HEIGHT - PIPE_GAP - 50) + 25;
    return {
      x,
      topHeight,
      bottomY: topHeight + PIPE_GAP,
      passed: false
    };
  };

  const gameLoop = useCallback(() => {
    if (!gameState.isPlaying || gameState.gameOver) return;

    setGameState(prev => {
      const newState = { ...prev };
      const { bird, pipes } = newState;

      // Update bird physics
      bird.velocity += 0.5; // gravity
      bird.y += bird.velocity;

      // Check if bird hits ground or ceiling
      if (bird.y <= 0 || bird.y >= CANVAS_HEIGHT - BIRD_SIZE) {
        newState.gameOver = true;
        newState.isPlaying = false;
        return newState;
      }

      // Update pipes
      for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x -= 3;

        // Check collision with pipe
        if (
          bird.x < pipe.x + PIPE_WIDTH &&
          bird.x + BIRD_SIZE > pipe.x &&
          (bird.y < pipe.topHeight || bird.y + BIRD_SIZE > pipe.bottomY)
        ) {
          newState.gameOver = true;
          newState.isPlaying = false;
          return newState;
        }

        // Check if bird passed pipe
        if (!pipe.passed && bird.x > pipe.x + PIPE_WIDTH) {
          pipe.passed = true;
          newState.score += 1;
        }

        // Remove pipes that are off screen
        if (pipe.x + PIPE_WIDTH < 0) {
          pipes.splice(i, 1);
        }
      }

      // Add new pipes
      if (pipes.length === 0 || pipes[pipes.length - 1].x < CANVAS_WIDTH - 200) {
        pipes.push(generatePipe(CANVAS_WIDTH));
      }

      return newState;
    });
  }, [gameState.isPlaying, gameState.gameOver]);

  useEffect(() => {
    const interval = setInterval(gameLoop, 16);
    return () => clearInterval(interval);
  }, [gameLoop]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        e.preventDefault();
        jump();
      }
    };

    const handleClick = () => {
      jump();
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [gameState.isPlaying, gameState.gameOver]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Flappy Bird del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4">
        <p className="text-lg">Puntuación: <span className="text-pink-600 font-semibold">{gameState.score}</span></p>
      </div>

      <div 
        className="relative bg-gradient-to-b from-sky-300 to-sky-400 rounded-lg mx-auto mb-4 overflow-hidden cursor-pointer"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
        onClick={jump}
      >
        {/* Pipes */}
        {gameState.pipes.map((pipe, index) => (
          <div key={index}>
            {/* Top pipe */}
            <div
              className="absolute bg-pink-500 border-r-4 border-pink-600"
              style={{
                left: pipe.x,
                top: 0,
                width: PIPE_WIDTH,
                height: pipe.topHeight
              }}
            />
            {/* Bottom pipe */}
            <div
              className="absolute bg-pink-500 border-r-4 border-pink-600"
              style={{
                left: pipe.x,
                top: pipe.bottomY,
                width: PIPE_WIDTH,
                height: CANVAS_HEIGHT - pipe.bottomY
              }}
            />
          </div>
        ))}

        {/* Bird */}
        <div
          className="absolute text-lg flex items-center justify-center"
          style={{
            left: gameState.bird.x,
            top: gameState.bird.y,
            width: BIRD_SIZE,
            height: BIRD_SIZE,
            transform: `rotate(${Math.min(Math.max(gameState.bird.velocity * 3, -45), 45)}deg)`
          }}
        >
          💕
        </div>

        {/* Game Over Overlay */}
        {gameState.gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-pink-700 mb-2">¡Juego Terminado!</p>
              <p className="text-pink-600">Puntuación: {gameState.score}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {!gameState.isPlaying ? (
          <Button onClick={startGame} className="bg-pink-500 hover:bg-pink-600">
            <Play className="w-4 h-4 mr-1" />
            {gameState.gameOver ? 'Reiniciar' : 'Jugar'}
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

      <div className="text-center text-sm text-muted-foreground">
        <p>Haz clic o presiona ESPACIO para volar</p>
        <p>¡Evita los tubos rosas y vuela entre ellos!</p>
      </div>
    </div>
  );
};
