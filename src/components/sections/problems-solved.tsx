import Image from 'next/image';
import React from 'react';

const problemsData = [
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/time-7.svg',
    title: 'Ahorro de tiempo',
    description: 'Reduce hasta un 85% el tiempo en atender los mensajes de tus clientes en comparación con el proceso manual.',
    alt: 'Ahorro de tiempo',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/errors-8.svg',
    title: 'Reducción de errores',
    description: 'Al eliminar la intervención manual, Maspedidos reduce hasta en un 95% los errores, asegurando que cada orden se tome correctamente.',
    alt: 'Reducción de errores',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/sales-9.svg',
    title: 'Maximiza las ventas',
    description: 'Recupera los pedidos que se perdían por no contestar a tiempo, lo que se traduce en más ventas.',
    alt: 'Maximiza las ventas',
  },
  {
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/happy-customers-10.svg',
    title: 'Clientes satisfechos',
    description: 'Ofrece a tus clientes una opción de pedido cómoda, rápida y amigable, mejorando su experiencia.',
    alt: 'Clientes satisfechos',
  },
];

const ProblemsSolved = () => {
  return (
    <section className="container py-10 sm:py-16">
      <h2 className="mb-5 text-center sm:text-left">
        Problemas que Maspedidos soluciona
      </h2>

      {/* Desktop View: a grid of problems */}
      <div className="hidden sm:grid grid-cols-[max-content_auto] gap-y-4 gap-x-5 items-center">
        {problemsData.map((item) => (
          <React.Fragment key={item.title}>
            <Image
              src={item.icon}
              alt={item.alt}
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <div>
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-neutral-600">{item.description}</p>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View: a scrollable carousel of problem cards */}
      <div className="sm:hidden -mx-4">
        <div className="no-scrollbar flex w-full snap-x gap-x-3 overflow-x-auto p-px px-4">
          {problemsData.map((item) => (
            <div key={item.title} className="w-[17rem] min-w-[17rem] snap-center rounded-lg bg-neutral-50 p-4">
              <Image
                src={item.icon}
                alt={item.alt}
                width={64}
                height={64}
                className="mb-2 h-16 w-16"
              />
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolved;