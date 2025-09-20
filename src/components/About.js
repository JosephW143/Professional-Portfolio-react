import React, { useState, useEffect, useRef } from "react";

function About () {
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
                rootMargin: '0px 0px -50px 0px'
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
        <section id="about" ref={sectionRef}>
            <div className="container mx-auto min-h-screen px-4 py-24">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left side content */}
                    <div className={`md:w-1/2 w-full mb-12 md:mb-0 md:pr-12 transition-all duration-1000 ${
                        isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
                    }`}>
                        <h2 className="title-font sm:text-7xl text-3xl mb-4">
                            <span className="bg-gradient-to-r from-[#FFF] to-[#5941A9] bg-clip-text text-transparent">&lt;Hello World!/&gt;</span>
                        </h2>
                        <p className="leading-relaxed mb-8 p-3 text-white">
                        Full-stack web developer leveraging customer service background to build a more human user experience on the web. 
                        Earned a certificate in full-stack development from The University of Central Florida, developing skills in HTML, CSS, JavaScript, React.js, and responsive web design. 
                        With 3 years of on the job development experience, I have honed my skills in web development creating dynamic and engaging user experiences for the real world. 
                        Known as an innovative problem solver passionate about developing apps, focusing on mobile-first design and development. 
                        With each project, my aim is to best engage my audience for an impactful user experience while also furthering my skills. 
                        I applied aspects of UX and agile development in a recent project. 
                        I worked on a team of six to develop a single-page MERN app that helps gym rats find new workouts to try out as well as save their favorites to their own personal account. 
                        I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                        </p>
                    </div>
                    
                    {/* Right side cards */}
                    <div className={`md:w-1/2 w-full flex flex-col space-y-6 transition-all duration-1000 ${
                        isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
                    }`}>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 h-32 flex items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
                                <p className="text-gray-300 text-sm md:text-base">React, JavaScript, HTML/CSS, Tailwind, Material UI, Bootstrap, jQuery, OOP</p>
                            </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 h-32 flex items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                                <p className="text-gray-300 text-sm md:text-base">Node.js, Express, APIs, GraphQl, MySQL, MongoDB, OOP</p>
                            </div>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 min-h-32 flex items-center">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Other Skills</h3>
                                <p className="text-gray-300 text-sm md:text-base">Salesforce development/administration, Account Management, Google Analytics, SEO, Adaptable, Communication, Collaborative, Time Management</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;