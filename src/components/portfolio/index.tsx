"use client";
import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface ImageProps {
  src: string;
  alt: string;
  isVertical?: boolean;
}

const Portfolio: React.FC = () => {
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
        { src: '/portfolio/1.png', alt: 'Imagem 1' },
        { src: '/portfolio/2.png', alt: 'Imagem 2' },
        { src: '/portfolio/3.png', alt: 'Imagem 3' },
        { src: '/portfolio/4.png', alt: 'Imagem 4' },
        { src: '/portfolio/5.png', alt: 'Imagem 5' },
        { src: '/portfolio/6.png', alt: 'Imagem 6' },
        { src: '/portfolio/7.png', alt: 'Imagem 7' },
        { src: '/portfolio/8.png', alt: 'Imagem 8' },
        { src: '/portfolio/9.png', alt: 'Imagem 9' },
        { src: '/portfolio/10.png', alt: 'Imagem 10' },
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
    <section id="portfolio" className="dark:bg-custom-black bg-custom-white py-16 px-5 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              image.isVertical ? "row-span-2" : "row-span-1"
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

export default Portfolio;
