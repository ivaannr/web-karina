
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, RotateCcw } from 'lucide-react';

const EMOJIS = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '❤️'];

export const MemoryGame = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initializeGame = () => {
    const shuffledCards = [...EMOJIS, ...EMOJIS]
      .sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setMatched(prev => [...prev, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
      setMoves(prev => prev + 1);
    }
  }, [flipped, cards]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setIsWon(true);
    }
  }, [matched, cards]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }
    setFlipped(prev => [...prev, index]);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Heart className="h-6 w-6 text-pink-600" />
        <h3 className="text-xl font-bold text-primary">Juego de Memoria del Amor</h3>
        <Heart className="h-6 w-6 text-pink-600" />
      </div>

      <div className="mb-4">
        <p className="text-lg">Movimientos: <span className="text-pink-600 font-semibold">{moves}</span></p>
      </div>

      <div className="grid grid-cols-4 gap-2 w-64 mx-auto mb-4">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-14 h-14 rounded-lg text-2xl font-bold transition-all duration-300 ${
              flipped.includes(index) || matched.includes(index)
                ? 'bg-pink-100 border-2 border-pink-300'
                : 'bg-pink-50 border-2 border-pink-200 hover:bg-pink-100'
            }`}
          >
            {flipped.includes(index) || matched.includes(index) ? card : '💖'}
          </button>
        ))}
      </div>

      {isWon && (
        <div className="mb-4 p-4 bg-pink-100 rounded-lg">
          <h3 className="text-lg font-bold text-pink-700 mb-2">¡Felicidades!</h3>
          <p className="text-pink-600">Completaste el juego en {moves} movimientos</p>
        </div>
      )}

      <Button onClick={initializeGame} variant="outline" className="text-pink-600 border-pink-200">
        <RotateCcw className="w-4 h-4 mr-1" />
        Nuevo Juego
      </Button>

      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Encuentra todas las parejas de corazones</p>
      </div>
    </div>
  );
};
