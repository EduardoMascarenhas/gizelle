"use client";
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface ImageProps {
  src: string;
  alt: string;
  isVertical?: boolean;
}

const Disclaimer: React.FC = () => {
  const [images, setImages] = useState<{ src: string; alt: string; isVertical: boolean }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [imageLoading, setImageLoading] = useState<boolean>(false); // Estado para carregamento da imagem

  // Função para verificar a orientação da imagem
  const checkImageOrientation = (src: string) => {
    return new Promise<boolean>((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        resolve(img.width < img.height);
      };
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      const imageSources: ImageProps[] = [
        { src: '/assets/disclaimer/1.jpg', alt: 'Imagem 1' },
        { src: '/assets/disclaimer/2.jpg', alt: 'Imagem 2' },
        { src: '/assets/disclaimer/3.jpg', alt: 'Imagem 3' },
        { src: '/assets/disclaimer/4.jpg', alt: 'Imagem 4' },
      ];

      const imagesWithOrientation = await Promise.all(
        imageSources.map(async (image) => {
          const isVertical = await checkImageOrientation(image.src);
          return { ...image, isVertical };
        })
      );

      setImages(imagesWithOrientation);
    };

    loadImages();
  }, []);

  // Função para abrir o modal e garantir que a imagem foi carregada
  const openModal = (index: number) => {
    setImageLoading(true); // Começa o carregamento
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setImageLoading(false); // Reseta o estado de carregamento
  };

  // Função para quando a imagem for carregada no Lightbox
  const onImageLoad = () => {
    setImageLoading(false); // Quando a imagem for carregada, removemos o estado de carregamento
  };


  return (
    <section id="disclaimer" className="bg-custom-bege py-16 px-5 scroll-mt-24 ">
      <div className="flex flex-col items-center max-w-5xl p-[30px] mx-auto">
        <p style={{ fontFamily: "var(--font-playfair-display)" }} className="text-custom-black text-center font-medium text-xl">
          TRABALHO COM DUAS VERDADES QUE SE ENCONTRAM: O QUE É REAL E O QUE COMUNICA.
        </p>
        <br />
        <p className="text-custom-black text-center font-light text-lg">
          Na fotografia documental, meu foco é registrar a vida como ela acontece ── com o mínimo de interferências ou quando se
          trata de um ensaio, para uma direção leve e real. Em casamentos, principalmente, observo e busco entender o momento, para
          transformar o espontâneo em memória.
        </p>
        <br />
        <p className="text-custom-black text-center font-light text-lg">
          No posicionamento, meu olhar é o mesmo, só muda o propósito: aqui eu traduzo quem você é e o que você faz em imagens
          estratégicas. Não crio personagens. Te ajudo a construir presença.
          Através de decisões assertivas ── revelamos a essência da marca ou da pessoa por trás dela.
        </p>
        <br />
        <p className="text-custom-black text-center font-light text-lg">
          Em tudo que faço, busco clareza, intenção e verdade.
          Porque tanto na vida quanto no trabalho, acredito que o que permanece é sempre o que é real.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.isVertical ? "row-span-2" : "row-span-1"
              } transition-all duration-300 ease-in-out cursor-pointer`}
            onClick={() => openModal(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <Lightbox
          mainSrc={images[currentImageIndex].src}
          nextSrc={images[(currentImageIndex + 1) % images.length].src}
          prevSrc={images[(currentImageIndex + images.length - 1) % images.length].src}
          onCloseRequest={closeModal}
          onMovePrevRequest={() =>
            setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImageIndex((currentImageIndex + 1) % images.length)
          }
          // Handler para imagem carregada
          onImageLoad={onImageLoad}
        />
      )}

      {/* Exibindo estado de carregamento se necessário */}
      {imageLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <span className="text-white text-2xl">Carregando...</span>
        </div>
      )}
    </section>
  );
};

export default Disclaimer;
