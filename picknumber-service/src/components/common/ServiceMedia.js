import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

function ServiceMedia() {
  const videoRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  const videoFilePath = "https://youtu.be/lwwV-jRpYHw"; // 파일 경로

  return (
    <div className="kiosk_media" ref={videoRef}>
      <ReactPlayer
        className="react-player"
        controls={false}
        width="100%"
        height="100%"
        muted={true}
        playing={false}
        loop={true}
        url={videoFilePath}
        config={{ file: { attributes: { controlsList: "nodownload" } } }}
      />
    </div>
  );
}

export default ServiceMedia;
