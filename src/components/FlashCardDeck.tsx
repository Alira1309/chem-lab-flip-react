
import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import Navigation from './Navigation';
import { flashcards, FlashCard as FlashCardType } from '../data/flashcards';
import { useToast } from '@/hooks/use-toast';
import { Lightbulb } from 'lucide-react';

const FlashCardDeck: React.FC = () => {
  const [cards, setCards] = useState<FlashCardType[]>(flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seenCards, setSeenCards] = useState<Set<number>>(new Set());
  const [showingAllAnswers, setShowingAllAnswers] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Mark current card as seen
    if (!seenCards.has(cards[currentIndex].id)) {
      const newSet = new Set(seenCards);
      newSet.add(cards[currentIndex].id);
      setSeenCards(newSet);
    }
  }, [currentIndex, cards, seenCards]);

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // We've reached the end of the deck
      if (seenCards.size === cards.length && !completed) {
        setCompleted(true);
        const score = Math.floor((correctAnswers / cards.length) * 100);
        if (score > 70) {
          toast({
            title: "Отличная работа, юный алхимик!",
            description: `Вы ответили правильно на ${score}% вопросов!`,
            duration: 5000,
          });
        } else {
          toast({
            title: "Попробуй провести эксперимент ещё раз!",
            description: `Вы ответили правильно на ${score}% вопросов.`,
            duration: 5000,
          });
        }
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setSeenCards(new Set());
    setCompleted(false);
  };

  const handleCorrectAnswer = () => {
    if (!seenCards.has(cards[currentIndex].id)) {
      setCorrectAnswers(correctAnswers + 1);
    }
  };

  const toggleAllAnswers = () => {
    setShowingAllAnswers(!showingAllAnswers);
    if (!showingAllAnswers) {
      toast({
        title: "Все ответы показаны",
        description: "Нажмите кнопку снова, чтобы скрыть ответы",
        duration: 3000,
      });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={toggleAllAnswers}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Lightbulb size={18} />
          <span>See answers</span>
        </button>
        <h1 className="text-3xl font-bold text-center">Chemistry Lab</h1>
        <div className="w-24"></div> {/* Spacer for alignment */}
      </div>

      <div className="mb-8">
        <FlashCard 
          card={cards[currentIndex]} 
        />
      </div>

      <Navigation 
        currentIndex={currentIndex} 
        totalCards={cards.length} 
        onNext={handleNext}
        onPrev={handlePrev}
        onShuffle={handleShuffle}
      />
    </div>
  );
};

export default FlashCardDeck;
