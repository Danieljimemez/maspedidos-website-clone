"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const navLinks = [
  { href: "/precios", label: "Precios" },
  { href: "https://maspedidos.menu/ejemplo", label: "Ver ejemplo" },
  { href: "/contacto/soporte", label: "Contáctanos" },
];

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 h-16 bg-white border-b border-neutral-200">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-6">
          <a href="/" className="flex items-center hover:opacity-60 transition-opacity">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/icons/logo-256-256-1.png"
              alt="Maspedidos"
              width={32}
              height={32}
              className="block sm:hidden"
            />
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/horizontal-imagotype-1.svg"
              alt="Maspedidos"
              width={168}
              height={30}
              className="hidden sm:block"
            />
          </a>
          <nav className="hidden lg:flex items-center h-full gap-x-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative flex h-full items-center text-base text-neutral-800 hover:opacity-60 transition-opacity"
              >
                {link.label}
                <div className="absolute bottom-0 inset-x-0 h-1 rounded-t-sm bg-transparent group-hover:bg-neutral-200 transition-colors duration-100"></div>
              </a>
            ))}
          </nav>
        </div>
        
        <aside className="flex items-center">
          <div className="hidden lg:flex items-center gap-x-2">
            <a
              href="https://dashboard.maspedidos.mx/login"
              className="group flex items-center gap-1 h-9 px-3.5 font-medium text-base text-neutral-800 hover:opacity-60 transition-opacity"
            >
              Iniciar sesión
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/arrow_forward-3.svg"
                alt="arrow forward"
                width={14}
                height={14}
                className="group-hover:translate-x-0.5 transition-transform duration-100"
              />
            </a>
            <a
              href="https://dashboard.maspedidos.mx/signup"
              className="group inline-flex items-center justify-center gap-1 rounded-full h-9 px-3.5 text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-[#2D9A5F] transition-colors"
            >
              Probar gratis
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/arrow_forward-3.svg"
                alt="arrow forward"
                width={14}
                height={14}
                className="group-hover:translate-x-0.5 transition-transform duration-100"
              />
            </a>
          </div>
          
          <div className="lg:hidden ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group inline-flex items-center justify-center rounded-full h-9 px-3.5 border border-neutral-200 bg-white shadow hover:border-neutral-400/65 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="h-6 w-6 text-neutral-800" />
              ) : (
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/dehaze-2.svg"
                  alt="Menu"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              )}
            </button>
          </div>
        </aside>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-4 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-neutral-200 my-2"></div>
            <a
              href="https://dashboard.maspedidos.mx/login"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Iniciar sesión
            </a>
            <a
              href="https://dashboard.maspedidos.mx/signup"
              onClick={() => setIsMenuOpen(false)}
              className="group mt-2 block w-full text-center rounded-full py-2 px-3.5 text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-[#2D9A5F] transition-colors"
            >
              Probar gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;