import React from 'react';

const Sobre: React.FC = () => {

  return (
    <section id="sobre" className="dark:bg-custom-black bg-custom-white py-16 px-5 scroll-mt-24 ">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 gap-10 md:space-y-0 max-w-6xl mx-auto">
        <div className="flex-shrink-0">
          <img
            src="/gizelle.png" 
            alt="Giselle"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center md:text-left md:w-2/3 space-y-4">
          <h2 className="text-3xl font-semibold text-custom-brown">SOBRE MIM</h2>
          <p className=" text-black">
            Oi, sou Giselle, fotógrafa e publicitária em Feira de Santana.
          </p>
          <p className=" text-black">
            Fotografia, para mim, é sobre manter viva a memória da vida como ela acontece — simples, real e significativa. Minha fotografia une
            o lado documental, que valoriza o que é real, com um olhar estratégico, essencial para os retratos profissionais e trabalhos de marcas.
            Minha formação em Publicidade me ajudou a criar imagens que traduzem essência e posicionamento de forma clara e verdadeira.
          </p>
          <p className=" text-black">
            Além da fotografia, sou apaixonada por filmes e séries. Observar como cada história é contada através das cores, da iluminação, da
            composição e dos ângulos, me inspira diariamente a criar registros que transmitem sentimentos e narrativas de maneira autêntica.
          </p>
          <p className=" text-black">
            Minha fotografia nasce do encontro entre técnica, sensibilidade e intenção: onde busco contar histórias verdadeiras e, ao mesmo
            tempo, conectar pessoas àquilo que elas são e representam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
