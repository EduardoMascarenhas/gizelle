import React from 'react';

const Sobre: React.FC = () => {

  return (
    <section id="sobre" className="bg-custom-black py-16 px-5 scroll-mt-24 ">
      <div className="flex flex-col lg:flex-row items-center p-10 lg:p-0 space-y-8 gap-20 md:space-y-0 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src="/assets/giselle.jpg"
            alt="Giselle"
            className="max-w-[470px] h-full object-contain"
          />
        </div>
        <div className="text-center md:text-left md:w-2/3 space-y-4 max-w-[420px]">
          <p className=" text-white">
            UMA APRESENTAÇÃO É SEMPRE NESCESSÁRIA
          </p>
          <div className='flex gap-[15px] items-center justify-center md:justify-start  '>
            <hr className='w-[10px]' />
            <h2 style={{ fontFamily: "var(--font-playfair-display)" }} className="text-3xl italic font-light tracking-wide text-custom-white">
              prazer, Giselle
            </h2>
          </div>
          <p className=" text-custom-white">
            Antes de te apresentar o meu trabalho preciso falar um
            pouco sobre mim.
          </p>
          <p className=" text-custom-white">
            Tenho 28 anos, sou formada em Publicidade e Propaganda,
            mas foi a fotografia que me conquistou antes mesmo de
            começar a faculdade. Sigo esse caminho porque é onde me
            encontro de verdade e sou feliz.
          </p>
          <p className=" text-custom-white">
            Gosto do simples, muitas vezes até minimalista. Prefiro
            rotinas leves, ritmo calmo e de tudo que envolve criar com
            as mãos. Filmes, séries e músicas são meu refúgio quando
            preciso desacelerar. Sou direta, detalhista e apaixonada
            pela fotografia documental.
          </p>
          <p className=" text-custom-white">
            E, como uma boa geminiana, carrego essa curiosidade
            constante de aprender ── inclusive tentando, aos poucos,
            criar o hábito da leitura.
          </p>
          <p className=" text-custom-white">
            Minha fotografia nasce do que é real.
            Do jeito único que cada pessoa é, dos gestos, olhares
            e interações.
          </p>
          <p className=" text-custom-white">
            Eu amo fotografar porque posso testemunhar momentos
            importantes e registrar emoções que se tornam lembranças.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
