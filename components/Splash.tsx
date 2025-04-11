"use client";
import React, { useState } from "react";

function Splash() {
  const [showContent, setShowContent] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout(() => {
      setShowContent(false);
    }, 2000);}

  return (
    <>
      {showContent && (
        <div
          className={`transition-opacity duration-[3000ms] ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-50"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            src="/videos/Intro.mp4"
          />
        </div>
      )}
    </>
  );
}

export default Splash;
