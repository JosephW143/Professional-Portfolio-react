import React, { useState, useEffect, useRef } from "react";
import work from "../data/work";

function Portfolio () {
    const [isVisible, setIsVisible] = useState(false);
        const sectionRef = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -100px 0px'
                }
            );
    
            if (sectionRef.current) {
                observer.observe(sectionRef.current);
            }
    
            return () => {
                if (sectionRef.current) {
                    observer.unobserve(sectionRef.current);
                }
            };
        }, []);
    return (    
    <section id="projects" ref={sectionRef}>
        <div className="container mx-auto text-center py-10 px-5 lg:px-44">
            <div className={`flex flex-col w-full mb-20 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-lg ${
                isVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-[-50px]'
            }`}>
                <h2 className="title-font md:text-5xl text-3xl font-black">
                   <span className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] bg-clip-text text-transparent">Projects I've Worked On</span>
                </h2>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[50px]'
            }`}>
                {work.map((project) => (
                    <div 
                        className="group bg-white/10 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer" 
                        key={project.id}
                    >
                        <div className="aspect-video overflow-hidden relative">
                            <img 
                                src={project.img} 
                                alt={project.alt} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:blur-xl"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <a 
                                    href={project.href} 
                                    className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    <span className="relative z-10">Visit Site</span>
                                    <div className="absolute inset-0 rounded-lg bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                                </a>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            
                        </div>
                    </div>
                ))}
            </div>
            <div className={`flex justify-center mt-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-lg ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[50px]'
            }`}>
                <p className="text-white text-bold text-2xl tracking-tight">More Projects Coming Soon...</p>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;