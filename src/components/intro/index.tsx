"use client";
import React, { useState } from "react";

const images = [
  "/assets/intro/1.png",
  "/assets/intro/2.jpg",
  "/assets/intro/3.jpg",
  "/assets/intro/4.jpg",
  "/assets/intro/5.jpg",
  "/assets/intro/6.jpg",
];

const ArrowLeft = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="11 18 5 12 11 6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

const Intro: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const changeSlide = (dir: "next" | "prev") => {
    if (incoming !== null) return; // evita clique duplo bugado

    const next =
      dir === "next"
        ? (index + 1) % images.length
        : (index - 1 + images.length) % images.length;

    setDirection(dir);
    setIncoming(next);
  };

  const handleAnimationEnd = () => {
    if (incoming === null) return;
    setIndex(incoming);
    setIncoming(null);
  };

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Slide atual (fixo) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Slide entrando (único animado) */}
      {incoming !== null && (
        <div
          onAnimationEnd={handleAnimationEnd}
          className={`
            absolute inset-0 bg-cover bg-center
            ${
              direction === "next"
                ? "animate-slide-in-right"
                : "animate-slide-in-left"
            }
          `}
          style={{ backgroundImage: `url(${images[incoming]})` }}
        />
      )}

      {/* Overlay 
      <div className="absolute inset-0 bg-black/40 z-10" />
      */}

      {/* Conteúdo */}
      <div className="relative z-20 h-full flex items-center justify-center" />

      {/* Setas */}
      <button
        onClick={() => changeSlide("prev")}
        className="absolute inset-y-0 left-8 my-auto z-30
                   text-white opacity-70 hover:opacity-100 transition"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={() => changeSlide("next")}
        className="absolute inset-y-0 right-8 my-auto z-30
                   text-white opacity-70 hover:opacity-100 transition"
      >
        <ArrowRight />
      </button>
    </section>
  );
};

export default Intro;
