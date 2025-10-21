import Image from 'next/image';

const socialLinks = [
  {
    href: 'https://www.instagram.com/maspedidos.mx/',
    alt: 'Instagram',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/instagram-12.svg',
  },
  {
    href: 'https://www.facebook.com/maspedidos.mx',
    alt: 'Facebook',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/facebook-13.svg',
  },
  {
    href: 'https://www.youtube.com/@maspedidos',
    alt: 'YouTube',
    icon: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/youtube-14.svg',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="container flex flex-col items-center text-center">
        <div className="mb-[10px] flex gap-x-[10px]">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              <Image src={link.icon} alt={link.alt} width={24} height={24} />
            </a>
          ))}
        </div>

        <hr className="w-full border-neutral-200" />

        <div className="mt-[10px] flex flex-wrap items-center justify-center gap-x-[10px] gap-y-2 text-sm font-medium text-neutral-600">
          <a href="/" className="transition-opacity hover:opacity-60">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/horizontal-imagotype-1.svg"
              alt="Maspedidos"
              width={135}
              height={24}
              className="h-6 w-auto"
            />
          </a>
          <a href="/legal/terms" className="text-neutral-600 no-underline transition-opacity hover:opacity-60">
            Términos
          </a>
          <a href="/legal/privacy" className="text-neutral-600 no-underline transition-opacity hover:opacity-60">
            Privacidad
          </a>
        </div>

        <p className="mt-[10px] max-w-xl text-center text-xs text-neutral-600">
          Este sitio no es parte de Facebook o Facebook Inc. Adicionalmente, este sitio NO está avalado por Facebook de ninguna forma. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;