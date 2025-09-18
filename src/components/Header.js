import React, { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="md:sticky top-0 z-10 shadow-md">
            <div className="flex justify-between items-center container mx-auto p-5">
                <h1 className="title-font font-bold text-2xl">Joseph Wright</h1>
                
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
            <nav className={`absolute top-full right-0 w-full md:w-1/4 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="container mx-auto p-5">
                    <ul className="flex flex-col space-y-4">
                        <li><a href="#about" className="text-black hover:text-blue-600 transition-colors duration-300">About</a></li>
                        <li><a href="#projects" className="text-black hover:text-blue-600 transition-colors duration-300">Projects</a></li>
                        <li><a href="#skills" className="text-black hover:text-blue-600 transition-colors duration-300">Skills</a></li>
                        <li><a href="#contact" className="text-black hover:text-blue-600 transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}