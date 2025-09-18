import React from "react";
import work from "../data/work";

function Portfolio () {
    return (    
    <section id="portfolio">
        <div className="container mx-auto text-center py-10 px-5 lg:px-44">
            <div className="flex flex-col w-full mb-20">
                <h2 className="title-font text-5xl font-black">
                   Some Projects I've worked on
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {work.map((project) => (
                    <div 
                        className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer" 
                        key={project.id}
                    >
                        <div className="aspect-video overflow-hidden">
                            <img 
                                src={project.img} 
                                alt={project.alt} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                            <a 
                                href={project.href} 
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
}

export default Portfolio;