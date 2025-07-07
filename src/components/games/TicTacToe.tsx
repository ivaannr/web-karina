
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, RotateCcw } from 'lucide-react';

type Player = 'X' | 'O' | null;

export const TicTacToe = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<Player | 'tie' | null>(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const checkWinner = (newBoard: Player[]): Player | 'tie' | null => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    if (newBoard.every(cell => cell !== null)) {
      return 'tie';
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Tres en Raya del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4">
        {winner ? (
          <p className="text-lg font-semibold text-pink-600">
            {winner === 'tie' ? '¡Empate!' : `¡Ganó ${winner}!`}
          </p>
        ) : (
          <p className="text-lg">Turno de: <span className="text-pink-600 font-semibold">{currentPlayer}</span></p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 w-48 mx-auto mb-4">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleCellClick(index)}
            className="w-14 h-14 bg-pink-50 border-2 border-pink-200 rounded-lg text-2xl font-bold text-pink-600 hover:bg-pink-100 transition-colors"
            disabled={!!cell || !!winner}
          >
            {cell}
          </button>
        ))}
      </div>

      <Button onClick={resetGame} variant="outline" className="text-pink-600 border-pink-200">
        <RotateCcw className="w-4 h-4 mr-1" />
        Reiniciar
      </Button>
    </div>
  );
};
