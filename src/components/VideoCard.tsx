// src/components/VideoCard.tsx
import React from "react";

interface VideoCardProps {
  iframeUrl: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframeUrl, title, date }) => {
  return (
    <div className="rounded-sm flex flex-col">
      <div className="video-card w-full">
        <iframe
          className="w-full h-auto"
          src={iframeUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="disposition-card">
        <h3 className="title-card">{title} </h3>
        <p className="date-card"> | {date}</p>
      </div>
    </div>
  );
};

export default VideoCard;
