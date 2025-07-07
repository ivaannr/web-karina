import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, RotateCcw } from 'lucide-react';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 300;
const PADDLE_WIDTH = 10;
const PADDLE_HEIGHT = 60;
const BALL_SIZE = 8;

export const Pong = () => {
  const [gameState, setGameState] = useState({
    leftPaddle: { x: 20, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
    rightPaddle: { x: CANVAS_WIDTH - 30, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
    ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: 3, dy: 3 },
    leftScore: 0,
    rightScore: 0,
    isPlaying: false,
    gameOver: false,
    winner: null as string | null
  });

  const resetGame = () => {
    setGameState({
      leftPaddle: { x: 20, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
      rightPaddle: { x: CANVAS_WIDTH - 30, y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2 },
      ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2, dx: 3, dy: 3 },
      leftScore: 0,
      rightScore: 0,
      isPlaying: false,
      gameOver: false,
      winner: null
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

  const gameLoop = useCallback(() => {
    if (!gameState.isPlaying || gameState.gameOver) return;

    setGameState(prev => {
      const newState = { ...prev };
      const { ball, leftPaddle, rightPaddle } = newState;

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with top and bottom walls
      if (ball.y <= 0 || ball.y >= CANVAS_HEIGHT - BALL_SIZE) {
        ball.dy = -ball.dy;
      }

      // Ball collision with paddles
      if (
        ball.x <= leftPaddle.x + PADDLE_WIDTH &&
        ball.y >= leftPaddle.y &&
        ball.y <= leftPaddle.y + PADDLE_HEIGHT
      ) {
        ball.dx = Math.abs(ball.dx);
      }

      if (
        ball.x >= rightPaddle.x - BALL_SIZE &&
        ball.y >= rightPaddle.y &&
        ball.y <= rightPaddle.y + PADDLE_HEIGHT
      ) {
        ball.dx = -Math.abs(ball.dx);
      }

      // Score points
      if (ball.x < 0) {
        newState.rightScore += 1;
        ball.x = CANVAS_WIDTH / 2;
        ball.y = CANVAS_HEIGHT / 2;
        ball.dx = 3;
      }

      if (ball.x > CANVAS_WIDTH) {
        newState.leftScore += 1;
        ball.x = CANVAS_WIDTH / 2;
        ball.y = CANVAS_HEIGHT / 2;
        ball.dx = -3;
      }

      // Check win condition
      if (newState.leftScore >= 5) {
        newState.winner = 'Jugador 1';
        newState.gameOver = true;
        newState.isPlaying = false;
      } else if (newState.rightScore >= 5) {
        newState.winner = 'Jugador 2';
        newState.gameOver = true;
        newState.isPlaying = false;
      }

      // Simple AI for right paddle
      if (ball.y > rightPaddle.y + PADDLE_HEIGHT / 2) {
        rightPaddle.y += 2;
      } else {
        rightPaddle.y -= 2;
      }

      // Keep paddles in bounds
      rightPaddle.y = Math.max(0, Math.min(CANVAS_HEIGHT - PADDLE_HEIGHT, rightPaddle.y));

      return newState;
    });
  }, [gameState.isPlaying, gameState.gameOver]);

  useEffect(() => {
    const interval = setInterval(gameLoop, 16);
    return () => clearInterval(interval);
  }, [gameLoop]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameState.isPlaying) return;

      setGameState(prev => {
        const newLeftPaddle = { ...prev.leftPaddle };
        if (e.key === 'ArrowUp' && newLeftPaddle.y > 0) {
          newLeftPaddle.y -= 20;
        } else if (e.key === 'ArrowDown' && newLeftPaddle.y < CANVAS_HEIGHT - PADDLE_HEIGHT) {
          newLeftPaddle.y += 20;
        }
        return { ...prev, leftPaddle: newLeftPaddle };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.isPlaying]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Pong del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4 flex justify-center gap-8">
        <p className="text-lg">Jugador 1: <span className="text-pink-600 font-semibold">{gameState.leftScore}</span></p>
        <p className="text-lg">CPU: <span className="text-pink-600 font-semibold">{gameState.rightScore}</span></p>
      </div>

      <div 
        className="relative bg-black rounded-lg mx-auto mb-4 overflow-hidden"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        {/* Left Paddle */}
        <div
          className="absolute bg-pink-500"
          style={{
            left: gameState.leftPaddle.x,
            top: gameState.leftPaddle.y,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT
          }}
        />

        {/* Right Paddle */}
        <div
          className="absolute bg-pink-500"
          style={{
            left: gameState.rightPaddle.x,
            top: gameState.rightPaddle.y,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT
          }}
        />

        {/* Ball */}
        <div
          className="absolute bg-pink-600 rounded-full"
          style={{
            left: gameState.ball.x,
            top: gameState.ball.y,
            width: BALL_SIZE,
            height: BALL_SIZE
          }}
        />

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-pink-300 opacity-50" style={{ transform: 'translateX(-50%)' }} />

        {/* Game Over Overlay */}
        {gameState.gameOver && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-pink-700 mb-2">¡{gameState.winner} Ganó!</p>
              <p className="text-pink-600">{gameState.leftScore} - {gameState.rightScore}</p>
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
        <p>Usa las teclas de flecha arriba/abajo para mover tu paleta</p>
        <p>¡Primer jugador en llegar a 5 puntos gana!</p>
      </div>
    </div>
  );
};
