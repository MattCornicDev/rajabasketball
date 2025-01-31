import React from "react";
import Image from "next/image";

interface AsideCardProps {
  title: string;
  content: string;
  linkText: string;
  linkHref: string;
  imageUrl?: string;
}

const AsideCard: React.FC<AsideCardProps> = ({
  title,
  content,
  linkText,
  linkHref,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md mb-4">
      {imageUrl && <Image src={imageUrl} alt={title} className="mb-2 rounded" />}{" "}
      {/* Ajoutez l'image ici */}
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <a href={linkHref} className="text-white hover:underline">
        {linkText}
      </a>
    </div>
  );
};

export default AsideCard;
