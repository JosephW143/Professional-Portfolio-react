import React from "react";
import me from '../img/joseph.JPG';
import shapes from "../svg/confetti-doodles.svg";

function About () {
    return (
        <section id="hero"
        style={{
            backgroundImage: `url(${shapes})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
        }}>
            <div className="container flex mx-auto px-10 py-20 md:flex-row flex-col items-center pb-96">
                <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-[#Fbd271]">
                    <h2 className="title-font sm:text-7xl text-3xl mb-4 border-b-4 border-[#Fbd271]">&lt;Hello World!/&gt;</h2>
                    <p className="leading-relaxed mb-8 p-3">
                        Crafting vibrant, user-friendly websites that bring ideas to life with a touch of creativity and a lot of code 
                    </p>
                </div>
                <div 
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
                >
                    <img className="object-center object-cover border-4 rounded-3xl border-[#Fbd271]" src={me} alt="A photo of Joseph Wright" />
                </div>
            </div>
        </section>
    );
}

export default About;