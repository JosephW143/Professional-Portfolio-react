import React from "react";
import me from '../img/joseph.JPG';
import Typer from './Typer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About () {
    return (
        <section id="hero"
        >
            <div className="container flex mx-auto px-10 pt-32 pb-52 md:flex-row flex-col items-center">
                <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade-in-left">
                    <h1 className="title-font sm:text-7xl text-3xl mb-4 ">
                        <span className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] bg-clip-text text-transparent tracking-tighter">Hi, I'm Joseph</span>
                    </h1>
                    <p className="leading-relaxed mb-8 p-3 h-24 lg:h-14">
                       <span className="text-white"><Typer texts={[
                         "Crafting vibrant, user-friendly websites that bring ideas to life with a touch of creativity and a lot of code",
                         "Full-stack developer passionate about creating engaging user experiences",
                         "Building modern web applications with React, Node.js, and cutting-edge technologies"
                       ]} /></span> 
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="relative overflow-hidden inline-flex text-white bg-[#b587c9] shadow-md shadow-[#b587c9] border-0 py-2 px-6 focus:outline-none rounded text-lg group">
                            <span className="relative z-10">Let's Chat</span>
                            <div className="absolute inset-0 bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>
                        <a href="https://docs.google.com/document/d/1ZChP3qM1jhh1zI2iunmw0s_s-oIVhDKDD7Yc-MhDMZ4/edit?usp=sharing" className="relative overflow-hidden inline-flex text-white bg-[#b587c9] shadow-md shadow-[#b587c9] border-0 ml-4 py-2 px-6 focus:outline-none rounded text-lg group">
                            <span className="relative z-10">Resume</span>
                            <div className="absolute inset-0 bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>
                    </div>
                    <div className="flex justify-center mt-4">
                        <a href="#contact" className="relative overflow-hidden inline-flex text-white bg-[#b587c9] shadow-md shadow-[#b587c9] border-0 py-2 px-2 focus:outline-none rounded-full text-lg group">
                            <span className="relative z-10">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </span>
                            <div className="absolute inset-0 bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>
                        <a href="#contact" className="relative overflow-hidden inline-flex text-white bg-[#b587c9] shadow-md shadow-[#b587c9] border-0 ml-4 py-2 px-2 focus:outline-none rounded-full text-lg group">
                            <span className="relative z-10">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </span>
                            <div className="absolute inset-0 bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        </a>
                    </div>
                </div>
                <div 
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 animate-fade-in-right"
                >
                    <img className="object-center object-cover border-4 rounded-3xl bg-gradient-to-r from-[#AFA2FF] to-[#262675]" src={me} alt="A photo of Joseph Wright" />
                </div>
            </div>
            <div className="container  w-full ">
                
            </div>
        </section>
    );
}

export default About;