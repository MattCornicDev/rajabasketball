// src/components/VideoCard.tsx
import React from "react";

interface VideoCardProps {
  iframeUrl: string;
  title: string;
  date: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ iframeUrl, title, date }) => {
  return (
    <div className="flex flex-col">
      <div className="video-card mb-4"> {/* Ajout de la marge en bas */}
        <iframe
          width="300"
          height="300"
          className="rounded-md w-4l h-full justify-between"
          src={iframeUrl}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
