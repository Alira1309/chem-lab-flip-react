
import React, { useState } from 'react';
import type { FlashCard as FlashCardType } from '../data/flashcards';

interface FlashCardProps {
  card: FlashCardType;
  isShowingAllAnswers?: boolean;
}

const FlashCard: React.FC<FlashCardProps> = ({ card, isShowingAllAnswers }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  React.useEffect(() => {
    setIsFlipped(isShowingAllAnswers || false);
  }, [isShowingAllAnswers]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="flip-card w-full h-80 sm:h-96 transform transition-all duration-500 hover:scale-[1.02]"
    >
      <div className={`flip-card-inner w-full h-full transform-gpu transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="flip-card-front absolute w-full h-full p-6 rounded-xl shadow-md bg-white/90 backdrop-blur-sm flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300 backface-hidden">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
            className="absolute top-4 left-4 text-xs text-primary/80 hover:text-primary font-medium transition-colors cursor-pointer hover:scale-110 transition-transform"
          >
            see answer
          </button>
          <div className="molecule molecule-1 animate-molecule-float"></div>
          <div className="molecule molecule-2 animate-molecule-float delay-100"></div>
          <div className="molecule molecule-3 animate-molecule-float delay-200"></div>
          <div className="molecule molecule-4 animate-molecule-float delay-300"></div>
          <div className="text-sm text-primary/80 font-medium">
            {card.category}
          </div>
          <div 
            className="flex-grow flex items-center justify-center cursor-pointer group-hover:transform group-hover:scale-105 transition-transform duration-300"
            onClick={handleFlip}
          >
            <h3 className="text-xl sm:text-2xl text-center font-medium">
              {card.question}
            </h3>
          </div>
          <div className="text-xs text-gray-400 text-right">
            Card #{card.id}
          </div>
        </div>
        <div 
          className="flip-card-back absolute w-full h-full p-6 rounded-xl shadow-md bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all duration-300 backface-hidden rotate-y-180"
          onClick={handleFlip}
        >
          <div className="text-sm text-primary/80 font-medium">
            {card.category}
          </div>
          <div className="flex-grow flex items-center justify-center">
            <p className="text-lg sm:text-xl text-center">
              {card.answer}
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
