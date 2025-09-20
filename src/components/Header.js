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
                    <span className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] bg-clip-text text-transparent">Joseph Wright</span>
                </p>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex">
                    <ul className="flex space-x-8">
                        <li><a href="#about" className="text-white relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">About</a></li>
                        <li><a href="#projects" className="text-white relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Projects</a></li>
                        <li><a href="#contact" className="text-white relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full">Contact</a></li>
                    </ul>
                </nav>
                
                {/* Mobile Navigation Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <nav className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-b-lg shadow-xl transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
            }`}>
                <div className="container mx-auto p-6">
                    <ul className="flex flex-col space-y-6">
                        <li>
                            <a 
                                href="#about" 
                                onClick={toggleMenu}
                                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-4 after:bottom-2 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                onClick={toggleMenu}
                                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-4 after:bottom-2 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={toggleMenu}
                                className="block text-white text-lg font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#AFA2FF] after:left-4 after:bottom-2 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}