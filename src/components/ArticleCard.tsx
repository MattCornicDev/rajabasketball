// src/components/ArticleCard.tsx
import React from 'react';

interface ArticleCardProps {
    title: string;
    description: string;
    linkText: string;
    linkHref: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, linkText, linkHref }) => {
    return (
        <div className="article-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={linkHref} className="link">
                {linkText}
            </a>
        </div>
    );
};

export default ArticleCard;