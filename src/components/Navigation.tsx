
import React from 'react';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';

interface NavigationProps {
  currentIndex: number;
  totalCards: number;
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
  language: string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentIndex,
  totalCards,
  onNext,
  onPrev,
  onShuffle,
  language,
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">{language === 'ru' ? 'Назад' : 'Previous'}</span>
      </button>
      
      <div className="text-center">
        <span className="bg-gray-100/80 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={onShuffle}
          className="bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 active:scale-95"
          title={language === 'ru' ? 'Перемешать карточки' : 'Shuffle cards'}
        >
          <Shuffle size={20} />
        </button>
        
        <button
          onClick={onNext}
          disabled={currentIndex === totalCards - 1}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          <span className="hidden sm:inline">{language === 'ru' ? 'Вперед' : 'Next'}</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
