
import React from 'react';
import FlashCardDeck from '@/components/FlashCardDeck';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-blue-50">
      <div className="container mx-auto pt-4 pb-16">
        <FlashCardDeck />
      </div>
    </div>
  );
};

export default Index;
