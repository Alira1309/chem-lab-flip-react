
import React from 'react';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';

interface NavigationProps {
  currentIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentIndex,
  totalCards,
  onNext,
  onPrev,
  onShuffle,
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Назад</span>
      </button>
      
      <div className="text-center">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={onShuffle}
          className="bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
          title="Перемешать карточки"
        >
          <Shuffle size={20} />
        </button>
        
        <button
          onClick={onNext}
          disabled={currentIndex === totalCards - 1}
          className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Вперед</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
