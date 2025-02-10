import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
=======
import Image from 'next/image'; 
>>>>>>> dev

interface PromoCardProps {
  imageUrl: string;
}

const PromoCard: React.FC<PromoCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-full border-1 border-gray-300 shadow-lg p-1 m-4">
<<<<<<< HEAD
      <Image src={imageUrl} alt="Promo" className="w-full h-auto" />
=======
      <Image 
        src={imageUrl} 
        alt="Promotion" 
        width={300} 
        height={200} 
        className="w-full h-auto" 
      />
>>>>>>> dev
    </div>
  );
};

export default PromoCard;