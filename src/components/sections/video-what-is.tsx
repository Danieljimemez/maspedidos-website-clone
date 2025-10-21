"use client";

import { useState, useRef } from "react";

export default function VideoWhatIs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      setIsPlaying(true);
      video.muted = false;
      video.play();
    }
  };

  return (
    <section className="container py-16 sm:py-20">
      <h2
        className="mb-5 text-center font-semibold text-neutral-800"
        style={{ fontSize: "clamp(2rem, 5vw, 2.25rem)", lineHeight: 1.25 }}
      >
        ¿Qué es Maspedidos?
      </h2>
      <div className="flex justify-center transition-transform duration-300 ease-out">
        <button
          onClick={!isPlaying ? handlePlayClick : (e) => e.preventDefault()}
          className="group/video relative w-11/12 overflow-hidden rounded-3xl"
          aria-label="Reproducir video sobre qué es Maspedidos"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            muted
            autoPlay
            playsInline
            controls={isPlaying}
            src="https://www.maspedidos.mx/videos/what-is-preview.mp4"
            onClick={(e) => {
              if (isPlaying) {
                e.stopPropagation();
              }
            }}
          />
          {!isPlaying && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <svg
                aria-hidden="true"
                width="84"
                height="84"
              >
                <circle
                  className="fill-neutral-800/60 transition-[r] duration-200 group-hover/video:[r:42]"
                  cx="42"
                  cy="42"
                  r="38"
                />
                <path d="M36 29 L54 42 L36 55 Z" fill="white" />
              </svg>
            </div>
          )}
        </button>
      </div>
    </section>
  );
}