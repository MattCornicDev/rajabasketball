// src/components/VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  iframeUrl: string;
  title: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframeUrl, title, description }) => {
  return (
    <div className="border-4 border-gray-300 shadow-lg p-4 ">
      <div className="video-card w-full h-auto">
        <iframe
          width="100%"
          height="auto"
          src={iframeUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="font-bold mt-2">{title}</h3>
      <p className="mt-1">{description}</p>
    </div> 
  );
};

export default VideoCard;