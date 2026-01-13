import React from 'react';

const TellMe: React.FC = () => {

  return (
    <section className="bg-custom-black p-5 md:p-16 flex justify-center relative overflow-hidden">
      <img src="/assets/prewedding/15.jpg" alt='Me conta, qual momento você quer guardar para sempre?' className='max-w-8xl' />
      <div className='absolute h-fit inset-0 left-10 md:left-50 top-[50%] flex gap-2 items-center'>
        <h2
        style={{ fontFamily: "var(--font-playfair-display)" }}
        className="text-sm md:text-xl italic font-light tracking-wide text-custom-white"
      >
        Simples
      </h2>
      <span className="w-5 h-px bg-custom-white opacity-80" />
      <span className="hidden md:block w-5 h-px bg-custom-white opacity-80" />
      <h2
        style={{ fontFamily: "var(--font-playfair-display)" }}
        className="text-sm md:text-xl italic font-light tracking-wide text-custom-white"
      >
        Leve
      </h2>
      <span className="w-5 h-px bg-custom-white opacity-80" />
      <span className="hidden md:block w-5 h-px bg-custom-white opacity-80" />
      <h2
        style={{ fontFamily: "var(--font-playfair-display)" }}
        className="text-sm md:text-xl italic font-light tracking-wide text-custom-white"
      >
        Documental
      </h2>
      </div>
      
    </section>
  );
};

export default TellMe;
