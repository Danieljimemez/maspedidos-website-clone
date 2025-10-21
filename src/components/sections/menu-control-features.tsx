import {
  Bell,
  Pencil,
  DollarSign,
  Clock,
  CalendarCheck,
  Store,
} from "lucide-react";
import React from 'react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-x-3 rounded-md bg-white p-3">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-100 sm:h-12 sm:w-12 sm:bg-transparent">
      <Icon className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
    </div>
    <p className="text-sm leading-snug text-neutral-700">{text}</p>
  </div>
);

const features = [
  {
    icon: Bell,
    text: "Recibe alertas de nuevos pedidos con toda la información detallada.",
  },
  {
    icon: Pencil,
    text: "Cambia los precios en cuestión de segundos.",
  },
  {
    icon: DollarSign,
    text: "Calcula el costo de envío automaticamente con base a la distancia.",
  },
  {
    icon: Clock,
    text: "Establece los horarios de operación de tu restaurante.",
  },
  {
    icon: CalendarCheck,
    text: "Haz que tus productos estén disponibles solo en ciertos días y horarios.",
  },
  {
    icon: Store,
    text: "Gestiona múltiples sucursales desde una misma cuenta sin costo adicional.",
  },
];

const MenuControlFeatures = () => {
  return (
    <section className="container">
      <h2 className="mb-5">
        Control completo de tu menú
      </h2>
      <div className="flex flex-col gap-y-2.5 rounded-xl bg-green-100 p-3 sm:grid sm:grid-cols-2 sm:gap-x-3 sm:gap-y-3 sm:p-3.5">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </section>
  );
};

export default MenuControlFeatures;