import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section className="bg-neutral-50">
      <div className="container py-16 lg:py-20">
        <h2 className="mb-5 text-center text-3xl font-semibold text-neutral-800 md:text-4xl">
          ¿Cómo funciona?
        </h2>
        <div className="flex flex-col items-center gap-y-3 text-center md:grid md:grid-cols-[1fr_max-content_1fr_max-content_1fr]">
          <div className="flex flex-col items-center">
            <Image
              className="mb-1.5"
              width={112}
              height={112}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/step-1-4.svg"
              alt="Icono de un menú en un portátil"
            />
            <h3 className="text-lg font-semibold text-neutral-800">
              Comparte el link del menú
            </h3>
            <p className="max-w-xs text-neutral-600">
              El cliente no tiene que descargar ninguna app, entra desde un link
              como{' '}
              <a
                href="https://www.maspedidos.menu/ejemplo"
                className="text-green-500 underline transition-colors hover:text-green-700"
              >
                maspedidos.menu/ejemplo
              </a>
            </p>
          </div>

          <svg
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="mb-1 shrink-0 fill-blue-700 md:-rotate-90 md:mb-12"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>

          <div className="flex flex-col items-center">
            <Image
              className="mb-1.5"
              width={112}
              height={112}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/step-2-5.svg"
              alt="Icono de un pedido en un móvil"
            />
            <h3 className="text-lg font-semibold text-neutral-800">
              El cliente hace su pedido
            </h3>
            <p className="max-w-xs text-neutral-600">
              El cliente escoge sus productos favoritos, añade sus datos de
              envío y forma de pago.
            </p>
          </div>

          <svg
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="mb-1 shrink-0 fill-yellow-600 md:-rotate-90 md:mb-12"
          >
            <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
          </svg>

          <div className="flex flex-col items-center">
            <Image
              className="mb-1.5"
              width={112}
              height={112}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/step-3-6.svg"
              alt="Icono de una comanda con notificación"
            />
            <h3 className="text-lg font-semibold text-neutral-800">
              Recibes la comanda
            </h3>
            <p className="max-w-xs text-neutral-600">
              Te llegará el pedido del cliente con todos los datos
              organizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;