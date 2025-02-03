// src/components/ArticleCard.tsx
import React from 'react';
import Image from 'next/image';

interface ArticleCardProps {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
    imageUrl?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, linkText, linkHref, imageUrl }) => {
    return (
        <div className="article-card p-4 flex flex-col md:flex-row">
    <Image
        src={imageUrl || "/default-image.jpg"} 
        alt="Image Article" 
        width={200} 
        height={200} 
        className="w-full md:w-1/2" // Prend toute la largeur sur mobile, moitié sur desktop
    />
    <div className="text-container mt-4 md:mt-0 md:ml-4 md:w-1/2"> {/* Espace entre l'image et le texte */}
        <h3 className="title-article text-lg font-bold">{title}</h3>
        <p className="description-article text-sm">{description}</p>
        <a href={linkHref} className="link-article text-blue-500 hover:underline">{linkText}</a>
    </div>
</div>
    );
};

export default ArticleCard;