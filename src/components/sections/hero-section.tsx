import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      className="flex flex-col items-center justify-center min-h-[calc(85svh-4rem)] bg-[linear-gradient(180deg,#d7f7e533,#ffffff4d),radial-gradient(circle_farthest-corner_at_50%_100%,white_62%,#d7f7e5)]"
    >
      <h1 className="text-neutral-800 [font-size:min(max(41px,13vw),120px)] font-semibold text-center leading-[1.14] mb-1 sm:mb-0">
        Automatiza
        <br />
        los pedidos a
        <br />
        domicilio
      </h1>
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center">
        <p className="mb-6 sm:text-lg text-center text-neutral-700">
          Gestiona en <span className="font-semibold">automático</span> los pedidos que tu restaurante recibe por WhatsApp.
        </p>
        <a 
          href="https://dashboard.maspedidos.mx/signup" 
          className="group inline-flex items-center justify-center whitespace-nowrap font-medium gap-1 bg-primary text-primary-foreground shadow hover:bg-[#2D9A5F] rounded-full h-[2.313rem] px-3.5 py-1 max-[425px]:w-full transition-colors duration-200"
        >
          Probar 14 días gratis
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/arrow_forward-3.svg"
            alt="Arrow forward icon"
            width={14}
            height={14}
            className="group-hover:translate-x-0.5 transition-transform duration-100"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;