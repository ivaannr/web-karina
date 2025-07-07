
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause, RotateCcw } from 'lucide-react';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 300;
const PADDLE_WIDTH = 80;
const PADDLE_HEIGHT = 10;
const BALL_SIZE = 8;
const BRICK_WIDTH = 40;
const BRICK_HEIGHT = 20;
const BRICK_ROWS = 5;
const BRICK_COLS = 10;

export const Breakout = () => {
  const [gameState, setGameState] = useState({
    paddle: { x: CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, y: CANVAS_HEIGHT - 30 },
    ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50, dx: 3, dy: -3 },
    bricks: [] as Array<{ x: number; y: number; visible: boolean }>,
    score: 0,
    isPlaying: false,
    gameOver: false,
    gameWon: false
  });

  const initializeBricks = () => {
    const bricks = [];
    for (let row = 0; row < BRICK_ROWS; row++) {
      for (let col = 0; col < BRICK_COLS; col++) {
        bricks.push({
          x: col * BRICK_WIDTH,
          y: row * BRICK_HEIGHT + 50,
          visible: true
        });
      }
    }
    return bricks;
  };

  const resetGame = () => {
    setGameState({
      paddle: { x: CANVAS_WIDTH / 2 - PADDLE_WIDTH / 2, y: CANVAS_HEIGHT - 30 },
      ball: { x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT - 50, dx: 3, dy: -3 },
      bricks: initializeBricks(),
      score: 0,
      isPlaying: false,
      gameOver: false,
      gameWon: false
    });
  };

  const startGame = () => {
    if (gameState.gameOver || gameState.gameWon) {
      resetGame();
    }
    setGameState(prev => ({ ...prev, isPlaying: true }));
  };

  const pauseGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: false }));
  };

  const gameLoop = useCallback(() => {
    if (!gameState.isPlaying || gameState.gameOver || gameState.gameWon) return;

    setGameState(prev => {
      const newState = { ...prev };
      const { ball, paddle, bricks } = newState;

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with walls
      if (ball.x <= 0 || ball.x >= CANVAS_WIDTH - BALL_SIZE) {
        ball.dx = -ball.dx;
      }
      if (ball.y <= 0) {
        ball.dy = -ball.dy;
      }

      // Ball collision with paddle
      if (
        ball.y + BALL_SIZE >= paddle.y &&
        ball.x >= paddle.x &&
        ball.x <= paddle.x + PADDLE_WIDTH
      ) {
        ball.dy = -Math.abs(ball.dy);
      }

      // Ball collision with bricks
      for (let i = 0; i < bricks.length; i++) {
        const brick = bricks[i];
        if (
          brick.visible &&
          ball.x < brick.x + BRICK_WIDTH &&
          ball.x + BALL_SIZE > brick.x &&
          ball.y < brick.y + BRICK_HEIGHT &&
          ball.y + BALL_SIZE > brick.y
        ) {
          brick.visible = false;
          ball.dy = -ball.dy;
          newState.score += 10;
          break;
        }
      }

      // Check win condition
      if (bricks.filter(brick => brick.visible).length === 0) {
        newState.gameWon = true;
        newState.isPlaying = false;
      }

      // Check game over
      if (ball.y > CANVAS_HEIGHT) {
        newState.gameOver = true;
        newState.isPlaying = false;
      }

      return newState;
    });
  }, [gameState.isPlaying, gameState.gameOver, gameState.gameWon]);

  useEffect(() => {
    const interval = setInterval(gameLoop, 16);
    return () => clearInterval(interval);
  }, [gameLoop]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameState.isPlaying) return;

      setGameState(prev => {
        const newPaddle = { ...prev.paddle };
        if (e.key === 'ArrowLeft' && newPaddle.x > 0) {
          newPaddle.x -= 20;
        } else if (e.key === 'ArrowRight' && newPaddle.x < CANVAS_WIDTH - PADDLE_WIDTH) {
          newPaddle.x += 20;
        }
        return { ...prev, paddle: newPaddle };
      });
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState.isPlaying]);

  useEffect(() => {
    resetGame();
  }, []);

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Breakout del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4">
        <p className="text-lg">Puntuación: <span className="text-pink-600 font-semibold">{gameState.score}</span></p>
      </div>

      <div 
        className="relative bg-black rounded-lg mx-auto mb-4 overflow-hidden"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        {/* Bricks */}
        {gameState.bricks.map((brick, index) => (
          brick.visible && (
            <div
              key={index}
              className="absolute bg-pink-400 border border-pink-300"
              style={{
                left: brick.x,
                top: brick.y,
                width: BRICK_WIDTH - 2,
                height: BRICK_HEIGHT - 2
              }}
            />
          )
        ))}

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

        {/* Paddle */}
        <div
          className="absolute bg-pink-500 rounded"
          style={{
            left: gameState.paddle.x,
            top: gameState.paddle.y,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT
          }}
        />

        {/* Game Over/Win Overlay */}
        {(gameState.gameOver || gameState.gameWon) && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg text-center">
              <p className="text-lg font-bold text-pink-700 mb-2">
                {gameState.gameWon ? '¡Ganaste!' : '¡Juego Terminado!'}
              </p>
              <p className="text-pink-600">Puntuación: {gameState.score}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2 mb-4">
        {!gameState.isPlaying ? (
          <Button onClick={startGame} className="bg-pink-500 hover:bg-pink-600">
            <Play className="w-4 h-4 mr-1" />
            {gameState.gameOver || gameState.gameWon ? 'Reiniciar' : 'Jugar'}
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
        <p>Usa las teclas de flecha para mover la paleta</p>
        <p>¡Rompe todos los ladrillos rosa para ganar!</p>
      </div>
    </div>
  );
};
