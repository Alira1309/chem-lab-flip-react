
import React, { useState } from 'react';
import type { FlashCard as FlashCardType } from '../data/flashcards';

interface FlashCardProps {
  card: FlashCardType;
}

const FlashCard: React.FC<FlashCardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flip-card w-full h-80 sm:h-96 cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner w-full h-full">
        <div className="flip-card-front p-6 rounded-xl shadow-md bg-white flex flex-col justify-between">
          <div className="absolute top-4 left-4 text-xs text-primary font-medium">
            see answer
          </div>
          <div className="molecule molecule-1 animate-molecule-float"></div>
          <div className="molecule molecule-2 animate-molecule-float delay-100"></div>
          <div className="molecule molecule-3 animate-molecule-float delay-200"></div>
          <div className="molecule molecule-4 animate-molecule-float delay-300"></div>
          <div className="text-sm text-primary/80 font-medium">
            {card.category}
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h3 className="text-xl sm:text-2xl text-center font-medium">
              {card.question}
            </h3>
          </div>
          <div className="text-xs text-gray-400 text-right">
            Card #{card.id}
          </div>
        </div>
        <div className="flip-card-back p-6 rounded-xl shadow-md bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col justify-between">
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
