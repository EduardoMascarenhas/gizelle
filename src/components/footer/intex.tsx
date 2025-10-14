"use client"
import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
    const images: string[] = [
        "/footer/1.png",
        "/footer/2.png",
        "/footer/3.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalTime = 3000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % images.length
            );
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <footer id="contato" className="w-full bg-custom-dark dark:bg-custom-white text-white dark:text-custom-black p-10 lg:p-30">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-white dark:text-black">Contato</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <p className="text-white dark:text-black">Instagram: <a href="https://www.instagram.com/gisellealvesfoto"
                                target="_blank"
                                rel="noopener noreferrer" className="hover:text-custom-brown text-custom-white dark:text-custom-white">@gisellealvesfoto</a> & <a href="https://www.instagram.com/porgisellealves"
                                    target="_blank"
                                    rel="noopener noreferrer" className="hover:text-custom-brown text-custom-white dark:text-custom-white">@porgisellealves</a></p>
                        </li>
                        <li><p className="text-white dark:text-black">Email:{' '}<a href="mailto:gialvesfotografia@gmail.com" className="hover:text-custom-brown text-custom-white dark:text-custom-white">gialvesfotografia@gmail.com</a></p></li>
                        <li><p className="text-white dark:text-black">WhatsApp:{' '}<a href="https://wa.me/5575991439679" target="_blank" rel="noopener noreferrer" className="hover:text-custom-brown text-custom-white dark:text-custom-white">(75) 9 9143-9679</a></p></li>
                        <br />
                        <li><p className="text-white dark:text-black">Feira de Santana - BA</p></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-custom-white dark:text-black">Voltar</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#portfolio" className="hover:text-custom-brown text-custom-white dark:text-custom-white">Portfólio</a></li>
                        <li><a href="#servicos" className="hover:text-custom-brown text-custom-white dark:text-custom-white">Serviços</a></li>
                        <li><a href="#sobre" className="hover:text-custom-brown text-custom-white dark:text-custom-white">Sobre Mim</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-custom-white dark:text-black">Veja mais</h4>
                    <a
                        href="https://www.instagram.com/gisellealvesfoto"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={images[currentIndex]}
                            alt="@gisellealvesfoto"
                            className="max-w-[200px] transition-opacity duration-500 ease-in-out cursor-pointer"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;