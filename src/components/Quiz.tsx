import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: "1",
    question: "¿Qué te regalé en nuestro primer mes juntos?",
    options: ["Bombones", "Chuches", "Un juguete"],
    correctAnswer: 0 // a - Bombones
  },
  {
    id: "2",
    question: "¿Cómo conociste a mis papás?",
    options: ["Nos pillaron en mi casa viendo una serie", "Nos encontraron en la calle", "Te los presenté de manera completamente normal"],
    correctAnswer: 0 // a - Nos pillaron en mi casa viendo una serie
  },
  {
    id: "3",
    question: "¿Qué serie vimos la primera vez que fui a tu casa?",
    options: ["Una de abogados", "Una de polis", "The Walking Dead"],
    correctAnswer: 0 // a - Una de abogados
  },
  {
    id: "4",
    question: "¿Qué fue lo que me regalaste para nuestro tercer mes juntos?",
    options: ["Un peluche", "Unas chuches", "Un cuadro"],
    correctAnswer: 2 // c - Un cuadro
  },
  {
    id: "5",
    question: "¿Cuál fue la primera peli que fuimos a ver juntitos al cine?",
    options: ["Tarot", "Alien", "La cita"],
    correctAnswer: 0 // a - Tarot
  },
  {
    id: "6",
    question: "¿Qué peli vimos la primera vez que viniste a mi casa?",
    options: ["La huérfana", "No vimos nada", "El lobo de wallstreet"],
    correctAnswer: 0 // a - La huérfana
  },
  {
    id: "7",
    question: "¿Cuántos peluches nos hemos regalado en total entre los 2?",
    options: ["3", "6", "5"],
    correctAnswer: 1 // b - 6
  }
];

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(question => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer && parseInt(selectedAnswer) === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="max-w-4xl mx-auto my-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">¡Test Completado!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">{score}</span>
              <span className="text-2xl text-muted-foreground"> / {questions.length}</span>
            </div>
            <p className="text-lg mb-6">
              {score === questions.length 
                ? "¡Perfecto! Conoces muy bien nuestra relación ❤️" 
                : score >= 5 
                ? "¡Muy bien! Sabes bastante sobre nosotros 😊"
                : "¡Puedes mejorar! Sigamos creando más recuerdos juntos 💕"}
            </p>
            <Button onClick={resetQuiz}>Repetir Test</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQ.id];

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-xl font-bold mb-6 text-center">Test de Nuestra Relación</h2>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <div className="w-full bg-secondary rounded-full h-2 mx-4">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <CardTitle className="text-lg">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
            {currentQ.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-accent">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 cursor-pointer text-sm"
                >
                  {option}
                </label>
              </div>
            ))}
          </RadioGroup>
          
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Anterior
            </Button>
            <Button 
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion === questions.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
