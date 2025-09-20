import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact () {
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
      <section id="contact" ref={sectionRef}>
        <div className={`container mx-auto min-h-screen px-4 pt-24 
            ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[50px]'
          }`}>
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
            <div className="md:w-1/2 w-full">
              <form className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-8 shadow-lg h-full">
                <h2 className="title-font text-3xl mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] bg-clip-text text-transparent">Send a Message</span>
                </h2>
                <div className="mb-6">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5941A9] focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="mb-6">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5941A9] focus:border-transparent backdrop-blur-sm"
                  />
                </div>
                <div className="mb-6">
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5941A9] focus:border-transparent backdrop-blur-sm resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button 
                    type="submit"
                    className="relative overflow-hidden w-1/2 bg-[#b587c9] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-[#5941A9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col w-full md:w-1/2 md:ml-auto">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg mb-12 md:mb-0 p-8 shadow-lg h-full flex flex-col justify-center">
                <h2 className="title-font text-3xl mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#AFA2FF] to-[#262675] bg-clip-text text-transparent">Let's Connect!</span>
                </h2>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-6">
                  <div>
                    <a href="https://linkedin.com/in/joseph-a-wright-14362iw4e5tu/" className="py-2 flex justify-center text-white">
                      <FontAwesomeIcon icon={faLinkedin} size="4x" />
                    </a>
                    <h3 className="text-center text-white">Linkedin</h3>
                  </div>

                  <div>
                    <a href="https://github.com/JosephW143" className="py-2 flex justify-center text-white">
                      <FontAwesomeIcon icon={faGithub} size="4x" />
                    </a>
                    <h3 className="text-center text-white">GitHub</h3>
                  </div>

                  <div>
                    <a href="tel:4075160262" className="py-2 flex justify-center text-white">
                      <FontAwesomeIcon icon={faPhone} size="4x" />
                    </a>
                    <h3 className="text-center text-white">(407)516-0262</h3>
                  </div>

                  <div>
                    <a href="mailto:josephwright1436@gmail.com" className="py-2 flex justify-center text-white">
                      <FontAwesomeIcon icon={faEnvelope} size="4x" />
                    </a>
                    <h3 className="text-center text-white">josephwright1436@gmail.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contact;

