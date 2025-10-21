"use client";

import React, { useRef } from "react";
import Image from "next/image";

const logos = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/kfc-1.jpg",
    alt: "KFC logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/wingsarmy-2.jpg",
    alt: "Wings Army logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/aragon-3.jpg",
    alt: "Aragon logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/bushercocdrils-4.jpg",
    alt: "Busher Cocdrils logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/ohmybowl-5.jpg",
    alt: "Oh My Bowl logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/rollingwings-6.jpg",
    alt: "Rolling Wings logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/veganspot-7.jpg",
    alt: "Vegan Spot logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/mexitacos-8.jpg",
    alt: "Mexitacos logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/bearwings-9.jpg",
    alt: "Bear Wings logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/elparrillonnorteno-10.jpg",
    alt: "El Parrillon Norteno logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/lafresita-11.jpg",
    alt: "La Fresita logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/encantadapizzeria-12.jpg",
    alt: "Encantada Pizzeria logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/latlacoyiza-13.jpg",
    alt: "La Tlacoyiza logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/barrio-14.jpg",
    alt: "Barrio logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/benditadelicia98-15.jpg",
    alt: "Bendita Delicia 98 logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/chuchosoficial-16.jpg",
    alt: "Chuchos Oficial logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/lafondaesquina-17.jpg",
    alt: "La Fonda Esquina logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/ponlecafe-18.jpg",
    alt: "Ponle Cafe logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/dogosembaraza2-19.jpg",
    alt: "Dogos Embaraza2 logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/hiroshirollsushi-20.jpg",
    alt: "Hiroshi Roll Sushi logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/rokkan-21.jpg",
    alt: "Rokkan logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/wingsandrades-22.jpg",
    alt: "Wings Andrades logo",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/images/frutamadrefacmed-23.jpg",
    alt: "Fruta Madre Facmed logo",
  },
];

const arrowIconUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/arrow_forward-3.svg";

const RestaurantLogosCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="container pt-0">
      <h2 className="mb-5 text-pretty text-[clamp(2rem,5vw,2.25rem)] font-semibold text-neutral-800 leading-[1.25]">
        El menú interactivo más popular de México
      </h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="snap-x flex gap-x-3 w-full overflow-scroll no-scrollbar p-px"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative snap-center h-20 w-40 shrink-0 rounded-lg bg-gradient-to-tl from-green-500/75 to-neutral-100"
            >
              <div className="absolute inset-[2px] flex items-center justify-center rounded-[calc(0.5rem-2px)] bg-white">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={128}
                  height={64}
                  className="h-16 w-auto grayscale object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_-80px_0_40px_-50px_white]"></div>
        <div className="absolute right-0 inset-y-0 flex items-center">
          <button
            onClick={handleScroll}
            aria-label="Ir a siguientes logos"
            className="group inline-flex items-center justify-center h-9 w-9 rounded-full bg-white border border-neutral-200 text-neutral-800 shadow-lg hover:border-neutral-400/65 hover:bg-neutral-100 duration-200"
          >
            <Image
              src={arrowIconUrl}
              alt="Flecha hacia adelante"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantLogosCarousel;