'use client';

import React from 'react';

const PlayIcon = ({ className }: { className?: string }) => (
  <svg
    role="button"
    className={`pointer-events-none absolute bottom-2 left-2 transition-transform duration-200 ease-out group-hover/video:scale-105 ${className}`}
    width="84"
    height="84"
    viewBox="0 0 84 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="42" cy="42" r="42" fill="white" />
    <path d="M55 42L36 55.6603L36 28.3397L55 42Z" fill="#27272A" />
  </svg>
);

const LogoPlaceholder = () => (
  // The asset for "Elotes del Rey" logo was not provided.
  // This placeholder is used to maintain the layout as described in the design instructions,
  // which is preferable to using an incorrect image or omitting the element entirely.
  <div className="rounded-full border-[3px] border-white size-16 sm:size-20 bg-neutral-100" />
);

const TestimonialSection = () => {
  return (
    <section className="bg-neutral-50">
      <div className="container py-16 sm:py-20 lg:py-24">
        <h2 className="mb-5 text-center">
          +1300 restaurantes ya confían en Maspedidos
        </h2>
        <div className="mx-auto max-w-4xl grid grid-rows-[auto_max-content] sm:grid-rows-1 sm:grid-cols-2 overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="relative">
            <button className="group/video relative h-full w-full aspect-video sm:aspect-auto">
              <video
                className="h-full w-full object-cover"
                poster="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/delrey-24.jpg"
                playsInline
                loop
                muted
                preload="metadata"
              >
                <source src="https://www.maspedidos.mx/videos/del-rey-review-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <PlayIcon />
            </button>
          </div>
          
          <div className="p-5 pt-0 sm:pt-4 flex flex-col justify-center sm:text-center">
            <div className="relative h-8 sm:h-auto mb-2 sm:mb-3">
              <div className="absolute sm:static inset-x-0 top-0 flex -translate-y-1/2 justify-center sm:translate-y-0">
                <LogoPlaceholder />
              </div>
            </div>
            <q className="mb-2 text-lg block text-neutral-800">
              Maspedidos me ha ayudado muchísimo en la rapidez en tomar los pedidos.
            </q>
            <p className="text-neutral-600 text-sm">
              — Dueña de Elotes del Rey
              <br />
              Mérida, Yuc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;