import React from "react";
import apeClub from "../img/apeClub.jpg";
import pizzaHunt from '../img/pizza-hunt.jpg';
import mmm from '../img/mmm.jpg';
import dogPark from '../img/dog-park.jpg';
import run from '../img/run-buddy.jpg';
import readme from '../img/readme-gen.jpg';

function Portfolio () {
    return (    
    <section id="portfolio">
        <div className="container mx-auto text-center py-10 px-5 lg:px-44">
            <div className="flex flex-col w-full mb-20">
                <h2 className="title-font border-b-4 border-black text-3xl">
                   Some Samples of my Work
                </h2>
            </div>
            <div className="flex flex-wrap -m-4">
                    <a
                    href="https://mysterious-fjord-50002.herokuapp.com/"
                    key={apeClub}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={apeClub}
                                alt="ape club website"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">Ape Club</h3>
                                <h4 className="title-font mb-3">MERN stack app</h4>
                            </div>
                        </div>
                    </a>
                    <a
                    href="https://guarded-ocean-81781.herokuapp.com/"
                    key={pizzaHunt}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={pizzaHunt}
                                alt="pizza hunt website"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">Pizza Hunt</h3>
                                <h4 className="title-font mb-3">Full Stack</h4>
                            </div>
                        </div>
                    </a>
                    <a
                    href="https://josephw143.github.io/Movie-Music-Magic/"
                    key={mmm}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={mmm}
                                alt="movie music magic website"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">Movie Music Magic</h3>
                                <h4 className="title-font mb-3">Font End</h4>
                            </div>
                        </div>
                    </a>
                    <a
                    href="https://the-dog-park-flying-lizards.herokuapp.com/"
                    key={dogPark}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={dogPark}
                                alt="dog park website"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">The Dog Park</h3>
                                <h4 className="title-font mb-3">Full Stack</h4>
                            </div>
                        </div>
                    </a>
                    <a
                    href="https://josephw143.github.io/run-buddy/"
                    key={run}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={run}
                                alt="run buddy website"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">Run Buddy</h3>
                                <h4 className="title-font mb-3">Front End</h4>
                            </div>
                        </div>
                    </a>
                    <a
                    href="https://github.com/JosephW143/Professional-README-Generator"
                    key={readme}
                    className="w-100 p-4 sm:w-1/2">
                        <div className="flex relative">
                            <img
                                src={readme}
                                alt="readme generator github"
                                className="object-cover object-center absolute w-full h-full"
                            />
                            <div className="relative border-slate-600 border-4 bg-slate-500 px-8 py-10 z-10 w-full opacity-0 hover:opacity-100">
                                <h3 className="title-font mb-1">Professional README Generator</h3>
                                <h4 className="title-font mb-3">Back End command line app</h4>
                            </div>
                        </div>
                    </a>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;