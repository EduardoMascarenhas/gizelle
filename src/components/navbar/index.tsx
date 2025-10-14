"use client"
import React, { useState } from "react";

const navLinks = [
    { name: "Portifólio", href: "#portfolio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre Mim", href: "#sobre-mim" },
    { name: "Contato", href: "#contato" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 dark:bg-custom-black bg-custom-white z-50">

            <nav className="flex flex-col items-center justify-between p-4">

                <div className="flex items-center">
                    <img src="logo.png" alt="Logo Giselle Alves" className="h-[85px]" id="logo" />
                </div>

                <div className="flex gap-5 text-gray-700">
                    <a href="#portfolio" className="relative group">
                        <span>Portfólio</span>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-custom-brown scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>

                    <a href="#servicos" className="relative group">
                        <span>Serviços</span>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-custom-brown scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>

                    <a href="#sobre" className="relative group">
                        <span>Sobre mim</span>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-custom-brown scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>

                    <a href="#contato" className="relative group">
                        <span>Contato</span>
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-custom-brown scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="relative md:hidden bg-custom-white dark:bg-custom-black shadow px-4 py-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block py-2 text-custom-black dark:text-custom-white hover:text-custom-brown transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;