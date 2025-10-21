"use client";

import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "¿Puedo cancelar mi suscripción cuando yo quiera?",
    answer:
      "Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones ni contratos a largo plazo. Tu servicio permanecerá activo hasta el final de tu ciclo de facturación actual.",
  },
  {
    id: "item-2",
    question: "¿Cómo funciona Maspedidos con WhatsApp?",
    answer:
      "Maspedidos se integra con tu número de WhatsApp para automatizar la recepción de pedidos. Cuando un cliente hace un pedido a través de tu menú digital, recibirás una notificación instantánea en WhatsApp con todos los detalles de la orden, lista para ser confirmada.",
  },
  {
    id: "item-3",
    question: "¿Yo o mis clientes necesitan descargar una app?",
    answer:
      "No, esa es una de las grandes ventajas. Tus clientes acceden a tu menú interactivo a través de un simple enlace web desde cualquier navegador, sin necesidad de descargar ni instalar ninguna aplicación.",
  },
  {
    id: "item-4",
    question: "¿Maspedidos proporciona repartidores?",
    answer:
      "Maspedidos se enfoca en la automatización y gestión de pedidos. No proporcionamos un servicio de repartidores, pero nuestra plataforma te permite coordinar fácilmente las entregas con tus propios repartidores o con servicios de entrega de terceros.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-semibold text-neutral-800 md:text-[36px] md:leading-[45px]">
          Preguntas frecuentes
        </h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-lg border border-neutral-200 bg-white"
              >
                <AccordionTrigger className="group flex w-full items-center justify-between p-4 text-left font-medium text-neutral-800 hover:no-underline sm:p-5">
                  <span className="flex-1 pr-4 text-base">{item.question}</span>
                  <div className="relative h-6 w-6 shrink-0">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ce89cf7-ea9c-48ee-a9cc-e080511067f7-maspedidos-mx/assets/svgs/chevron_right-11.svg"
                      alt="ícono de expansión"
                      width={24}
                      height={24}
                      className="transition-transform duration-300 group-data-[state=open]:rotate-90"
                    />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-neutral-600 sm:px-5 sm:pb-5">
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;