// src/components/PromoCard.tsx
import React from 'react';

interface PromoCardProps {
  
  imageUrl: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ imageUrl}) => {
  return (
    <div className="border-4 border-gray-300 shadow-lg p-4">
      <img src={imageUrl}  className="w-64 h-auto" />
    </div>
  );
};

export default PromoCard;