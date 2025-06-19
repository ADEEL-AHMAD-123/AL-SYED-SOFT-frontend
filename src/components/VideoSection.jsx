import React from 'react';
import '../styles/components/_video-section.scss';

const VideoSlider = () => {
  return (
    <div className="video-slider">
      <video
        className="video-bg"
        src="https://res.cloudinary.com/dycp0vyih/video/upload/v1750353340/qnmbuvtlhntwbslv7s3p.webm" 
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoSlider;
