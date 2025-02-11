import React from 'react';
import Image from 'next/image'; 

interface PromoCardProps {
  imageUrl: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ imageUrl }) => {
  return (
    <div className="">
      <Image 
        src={imageUrl} 
        alt="Promotion" 
        width={300} 
        height={200} 
        className="" 
      />
    </div>
  );
};

export default PromoCard;