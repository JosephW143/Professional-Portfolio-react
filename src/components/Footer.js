import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="backdrop-blur-md bg-white/10 shadow-lg">
            <div className="container mx-auto px-5 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-white mb-4 md:mb-0">
                        <span>Made with &#x2764; by Joseph Wright</span>
                    </div>
                    <div className="flex space-x-6">
                        <a href='https://github.com/JosephW143' className="text-white hover:text-gray-300 transition-colors duration-300">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a href='https://linkedin.com/in/joseph-a-wright-14362iw4e5tu' className="text-white hover:text-gray-300 transition-colors duration-300">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href='mailto:josephwright1436@gmail.com' className="text-white hover:text-gray-300 transition-colors duration-300">
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 