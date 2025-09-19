import React, { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled 
                ? 'backdrop-blur-md bg-white/10 shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="flex justify-between items-center container mx-auto p-5">
                <p className="title-font font-bold text-2xl">
                    <span className="bg-gradient-to-r from-[#E5D4ED] to-[#5941A9] bg-clip-text text-transparent">Joseph Wright</span>
                </p>
                
                {/* Navigation Button */}
                <button
                    onClick={toggleMenu}
                    className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Navigation Menu */}
            <nav className={`absolute top-full right-0 w-full md:w-1/4 shadow-lg transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            } ${
                isScrolled 
                    ? 'backdrop-blur-md bg-white/30 border-b border-white/20' 
                    : 'bg-white'
            }`}>
                <div className="container mx-auto p-5">
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#about" className="text-[#E5D4ED] hover:text-blue-600 transition-colors duration-300">About</a></li>
                        <li><a href="#projects" className="text-[#E5D4ED] hover:text-blue-600 transition-colors duration-300">Projects</a></li>
                        <li><a href="#skills" className="text-[#E5D4ED] hover:text-blue-600 transition-colors duration-300">Skills</a></li>
                        <li><a href="#contact" className="text-[#E5D4ED] hover:text-blue-600 transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}