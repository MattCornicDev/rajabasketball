import React from 'react';

interface AsideCardProps {
  title: string;
  content: string;
  linkText: string;
  linkHref: string;
}

const AsideCard: React.FC<AsideCardProps> = ({ title, content, linkText, linkHref }) => {
  return (
    <div className="bg-yellow-500 text-black p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <a href={linkHref} className="text-blue-600 hover:underline">
        {linkText}
      </a>
    </div>
  );
};

export default AsideCard;