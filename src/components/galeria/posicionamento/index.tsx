"use client";
import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface ImageProps {
    src: string;
    alt: string;
    isVertical?: boolean;
}

const GaleriaPosicionamento: React.FC = () => {
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
                { src: '/assets/posicionamento/1.jpg', alt: 'Imagem 1', isVertical: true },
                { src: '/assets/posicionamento/2.jpg', alt: 'Imagem 2', isVertical: true },
                { src: '/assets/posicionamento/3.jpg', alt: 'Imagem 3', isVertical: true },
                { src: '/assets/posicionamento/4.jpg', alt: 'Imagem 4', isVertical: true },
                { src: '/assets/posicionamento/5.jpg', alt: 'Imagem 5', isVertical: true },
                { src: '/assets/posicionamento/6.jpg', alt: 'Imagem 6', isVertical: true },
                { src: '/assets/posicionamento/7.jpg', alt: 'Imagem 7', isVertical: true },
                { src: '/assets/posicionamento/8.jpg', alt: 'Imagem 8', isVertical: true },
                { src: '/assets/posicionamento/9.jpg', alt: 'Imagem 9', isVertical: true },
                { src: '/assets/posicionamento/10.jpg', alt: 'Imagem 10', isVertical: true },
                { src: '/assets/posicionamento/11.png', alt: 'Imagem 11', isVertical: false },
                { src: '/assets/posicionamento/12.jpg', alt: 'Imagem 12', isVertical: true },
                { src: '/assets/posicionamento/13.jpg', alt: 'Imagem 13', isVertical: true },
                { src: '/assets/posicionamento/14.jpg', alt: 'Imagem 14', isVertical: true },
                { src: '/assets/posicionamento/15.jpg', alt: 'Imagem 15', isVertical: true },
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
        <section id="galeria-casamentos" className="bg-custom-bege py-16 px-5 scroll-mt-24 ">
            <div className='flex w-full text-center justify-center mb-10'>
                <h2 style={{ fontFamily: "var(--font-playfair-display)" }} className="text-3xl italic font-light tracking-wide text-custom-black">
                    Posicionamento
                </h2>
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

export default GaleriaPosicionamento;
