
import React, { useState, useEffect } from 'react';
import type { FlashCard as FlashCardType } from '../data/flashcards';

interface FlashCardProps {
  card: FlashCardType;
  isShowingAllAnswers?: boolean;
  language: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ card, isShowingAllAnswers, language }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(isShowingAllAnswers || false);
  }, [isShowingAllAnswers]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Get the appropriate content based on the selected language
  const getLocalizedContent = (content: string, ruContent?: string) => {
    if (language === 'ru' && ruContent) {
      return ruContent;
    }
    return content;
  };

  const question = getLocalizedContent(card.question, card.questionRu);
  const answer = getLocalizedContent(card.answer, card.answerRu);
  const category = getLocalizedContent(card.category, card.categoryRu);
  const seeAnswerText = language === 'ru' ? 'увидеть ответ' : 'see answer';

  return (
    <div 
      className="flip-card w-full h-80 sm:h-96 cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
      onClick={handleFlip}
    >
      <div className={`flip-card-inner w-full h-full relative ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front absolute w-full h-full p-6 rounded-xl shadow-md bg-white/90 backdrop-blur-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
            className="absolute top-4 left-4 text-xs text-primary/80 hover:text-primary font-medium transition-colors cursor-pointer hover:scale-110 transition-transform"
          >
            {seeAnswerText}
          </button>
          <div className="molecule molecule-1 animate-molecule-float"></div>
          <div className="molecule molecule-2 animate-molecule-float delay-100"></div>
          <div className="molecule molecule-3 animate-molecule-float delay-200"></div>
          <div className="molecule molecule-4 animate-molecule-float delay-300"></div>
          <div className="text-sm text-primary/80 font-medium">
            {category}
          </div>
          <div 
            className="flex-grow flex items-center justify-center cursor-pointer group-hover:transform group-hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl sm:text-2xl text-center font-medium">
              {question}
            </h3>
          </div>
          <div className="text-xs text-gray-400 text-right">
            Card #{card.id}
          </div>
        </div>
        <div 
          className="flip-card-back absolute w-full h-full p-6 rounded-xl shadow-md bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <div className="text-sm text-primary/80 font-medium">
            {category}
          </div>
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg sm:text-xl text-center">
              {answer}
            </p>
          </div>
          <div className="text-xs text-gray-400 text-right">
            Card #{card.id}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
