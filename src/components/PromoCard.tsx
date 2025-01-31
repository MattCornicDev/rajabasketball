// src/components/PromoCard.tsx
import React from 'react';

interface PromoCardProps {
  
  imageUrl: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ imageUrl}) => {
  return (
    <div className="w-full border-1 border-gray-300 shadow-lg p-1 m-4">
      <img src={imageUrl}  className="w-full h-auto" />
    </div>
  );
};

export default PromoCard;