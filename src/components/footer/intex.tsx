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
        <footer id="contato" className="w-full bg-custom-bege text-custom-black p-10 lg:p-30">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 style={{ fontFamily: "var(--font-playfair-display)" }} className="text-3xl italic font-light tracking-wide text-custom-black">
                        Contato
                    </h2>
                    <br />
                    <ul className="space-y-2 text-sm">
                        <li>
                            <p className="text-custom-black">Instagram: <a href="https://www.instagram.com/gisellealvesfoto"
                                target="_blank"
                                rel="noopener noreferrer" className="hover:text-custom-brown text-custom-black">@gisellealvesfoto</a> & <a href="https://www.instagram.com/porgisellealves"
                                    target="_blank"
                                    rel="noopener noreferrer" className="hover:text-custom-brown text-custom-black">@porgisellealves</a></p>
                        </li>
                        <li><p className="text-custom-black">Email:{' '}<a href="mailto:gialvesfotografia@gmail.com" className="hover:text-custom-brown text-custom-black">gialvesfotografia@gmail.com</a></p></li>
                        <li><p className="text-custom-black">WhatsApp:{' '}<a href="https://wa.me/5575991439679" target="_blank" rel="noopener noreferrer" className="hover:text-custom-brown text-custom-black">(75) 9 9143-9679</a></p></li>
                        <br />
                        <li><p className="text-custom-black">Feira de Santana - BA</p></li>
                        <br />
                        <br />
                        © 2026 Giselle Alves. Todos os direitos reservados. Desenvolvido pela <a href="https://navegantesdigitais.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-custom-brown text-custom-black">Navegantes Digitais</a>.
                    </ul>
                </div>

                <div>
                </div>

                <div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;