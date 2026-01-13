"use client";
import { link } from "fs";
import Link from "next/link";
import React from "react";

const items = [
  {
    title: "CASAMENTOS",
    image: "/assets/casamentos/2.png",
    link: "/casamentos",
  },
  {
    title: "PRÉ-WEDDING",
    image: "/assets/casamentos/4.png",
    link: "/pre-wedding",
  },
  {
    title: "GESTANTES",
    image: "/assets/gestantes/1.png",
    link: "/gestantes",
  },
  {
    title: "POSICIONAMENTO",
    image: "/assets/posicionamento/11.png",
    link: "/posicionamento",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="bg-custom-musgo py-50 px-5 scroll-mt-24"
    >
      {/* Título */}
      <div className="flex items-center justify-center mb-20">
        <h2
          style={{ fontFamily: "var(--font-playfair-display)" }}
          className="text-3xl italic font-light tracking-wide text-custom-white"
        >
          Portfólio
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {items.map((item, index) => (
          <Link href={item.link} key={index}>
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
            >
              {/* Imagem */}

              <img
                src={item.image}
                alt={item.title}
                className="
                w-full h-full object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-110
              "
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25" />

              {/* Texto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-custom-white text-xs tracking-[0.3em] font-bold">
                  {item.title}
                </span>
              </div>
            </div>
          </Link>

        ))}
      </div>
    </section>
  );
};

export default Portfolio;
