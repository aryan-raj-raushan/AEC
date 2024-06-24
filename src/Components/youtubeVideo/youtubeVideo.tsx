import React from "react";

const YouTubeVideo = ({
  videoId,
  width,
  height,
}: {
  videoId: string;
  width?: string;
  height?: string;
}) => {
  return (
    <div className="">
      <iframe
        className={`${width} ${height}`}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
