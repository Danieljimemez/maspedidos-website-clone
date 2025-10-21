"use client";
import { ArrowRight } from "lucide-react";

const DemoCta = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="mb-2.5 text-center">¡Quiero verlo en acción!</h2>
      <p className="mb-5 text-center text-neutral-600">
        Haz un pedido de prueba y experiméntalo como un cliente de tu
        restaurante lo haría.
      </p>
      <div className="flex justify-center">
        <a
          href="https://maspedidos.menu/ejemplo"
          className="group inline-flex h-[2.313rem] items-center justify-center gap-1 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-[#2D9A5F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Ver menú ejemplo
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-100 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
};

export default DemoCta;