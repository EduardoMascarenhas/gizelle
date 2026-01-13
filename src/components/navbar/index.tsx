"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Portifólio", href: "/#portfolio", hasDropdown: true },
    { name: "Serviços", href: "/#servicos" },
    { name: "Sobre Mim", href: "/#sobre" },
    { name: "Contato", href: "/#contato" },
];

const portfolioLinks = [
    { name: "Casamentos", href: "/casamentos" },
    { name: "Pré-wedding", href: "/pre-wedding" },
    { name: "Posicionamento", href: "/posicionamento" },
    { name: "Gestantes", href: "/gestantes" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [portfolioOpen, setPortfolioOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 h-[80px] w-full z-50 transition-colors duration-300
                ${isScrolled ? "bg-custom-black" : "bg-transparent"}
            `}
        >
            <div className="flex items-center justify-between h-full px-6 md:px-24">
                {/* Logo */}
                <Link href="/">
                    <img
                        src="/assets/logobranca.png"
                        alt="Logo Giselle Alves"
                        className="h-[20px]"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-white">
                    {navLinks.map((link) =>
                        link.hasDropdown ? (
                            <div key={link.name} className="relative group">
                                <a href={link.href} className="cursor-pointer">
                                    {link.name}
                                </a>

                                {/* Dropdown */}
                                <div
                                    className="absolute left-0 top-full mt-4 w-48
                                    bg-custom-black text-white
                                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                    transition-all duration-300 shadow-lg"
                                >
                                    {portfolioLinks.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-3 hover:bg-white hover:text-custom-black transition"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a key={link.name} href={link.href} className="relative group">
                                <span>{link.name}</span>
                                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </a>
                        )
                    )}
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-custom-black text-white px-6 py-4 space-y-4">
                    
                    {/* Portfólio - Accordion */}
                    <div>
                        <button
                            className="w-full flex justify-between items-center"
                            onClick={() => setPortfolioOpen(!portfolioOpen)}
                        >
                            <span>Portifólio</span>
                            <span className="text-sm">
                                {portfolioOpen ? "−" : "+"}
                            </span>
                        </button>

                        {portfolioOpen && (
                            <div className="mt-3 ml-4 space-y-2 text-sm">
                                {portfolioLinks.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Outros links */}
                    <a
                        href="/#servicos"
                        className="block"
                        onClick={() => setMenuOpen(false)}
                    >
                        Serviços
                    </a>
                    <a
                        href="/#sobre"
                        className="block"
                        onClick={() => setMenuOpen(false)}
                    >
                        Sobre Mim
                    </a>
                    <a
                        href="/#contato"
                        className="block"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contato
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
