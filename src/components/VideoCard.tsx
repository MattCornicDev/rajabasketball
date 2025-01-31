// src/components/VideoCard.tsx
import React from 'react';

interface VideoCardProps {
  iframeUrl: string;
  title: string;
  description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframeUrl, title, description }) => {
  return (
    <div className="shadow-lg rounded-sm flex flex-col items-center">
  <div className="video-card w-full">
    <iframe
      className="w-full h-auto"
      src={iframeUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
  <h3 className="font-bold">{title}</h3>
  <p className="">{description}</p>
</div>
  );
};

export default VideoCard;