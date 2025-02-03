import React from 'react';
import Image from 'next/image'; 

interface PromoCardProps {
  imageUrl: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-full border-1 border-gray-300 shadow-lg p-1 m-4">
      <Image 
        src={imageUrl} 
        alt="Promotion" 
        width={300} 
        height={200} 
        className="w-full h-auto" 
      />
    </div>
  );
};

export default PromoCard;