import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FinalCta = () => {
  return (
    <section 
      className="bg-[linear-gradient(180deg,rgba(215,247,229,0.2),rgba(255,255,255,0.3)),radial-gradient(circle_farthest-corner_at_50%_100%,white_62%,#d7f7e5)]"
    >
      <div className="container py-16 text-center md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center">
            <h2 className="mb-2.5 text-[32px] font-semibold leading-tight text-neutral-800 md:text-[36px] md:leading-[1.25]">
              Acabar con los problemas es así de fácil
            </h2>
            <p className="mb-5 text-neutral-700 sm:text-lg">
              Crea una cuenta y empieza a recibir pedidos el mismo día.
            </p>
            <Link
                href="https://dashboard.maspedidos.mx/signup"
                className="group inline-flex h-[37px] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-primary px-3.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-dark-green-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
                Probar 14 días gratis
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/arrow_forward-3.svg"
                  alt="Arrow icon"
                  width={14}
                  height={14}
                  className="transition-transform duration-100 group-hover:translate-x-0.5"
                />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;