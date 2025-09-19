import React from "react";
import me from '../img/joseph.JPG';
import shapes from "../svg/confetti-doodles.svg";

function About () {
    return (
        <section id="hero"
        >
            <div className="container flex mx-auto px-10 pt-32 pb-96 md:flex-row flex-col items-center">
                <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-[#Fbd271]">
                    <h1 className="title-font sm:text-7xl text-3xl mb-4 ">
                        <span className="bg-gradient-to-r from-[#E5D4ED] to-[#5941A9] bg-clip-text text-transparent">&lt;Hello World!/&gt;</span>
                    </h1>
                    <p className="leading-relaxed mb-8 p-3">
                       <span className="text-white">Crafting vibrant, user-friendly websites that bring ideas to life with a touch of creativity and a lot of code </span> 
                    </p>
                </div>
                <div 
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                    <img className="object-center object-cover border-4 rounded-3xl bg-gradient-to-r from-[#E5D4ED] to-[#5941A9]" src={me} alt="A photo of Joseph Wright" />
                </div>
            </div>
            <div className="container  w-full ">
                
            </div>
        </section>
    );
}

export default About;