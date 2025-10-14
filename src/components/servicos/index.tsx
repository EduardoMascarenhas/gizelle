import React from 'react';

const Servicos: React.FC = () => {

  return (
    <section id="servicos" className="dark:bg-custom-white bg-custom-dark py-16 px-5 scroll-mt-24">
      <div className='flex flex-col items-center max-w-[600px] mx-auto'>
        <h3 className="text-3xl font-semibold mb-8">Meus Serviços</h3>
        <p className='text-center'>Minha fotografia pode ser para você em diferentes momentos — seja um
          retrato pessoal, em família, com alguém especial, para sua carreira ou
          para sua marca. Também registro pequenas comemorações, sempre com
          uma proposta leve e documental.</p>
          <p className='text-center mt-5'>Propostas para ensaios a partir de R$430 e coberturas a partir de R$580.</p>
      </div>

    </section>
  );
};

export default Servicos;
