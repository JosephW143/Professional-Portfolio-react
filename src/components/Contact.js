import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Contact () {
    return (
      <section id="contact" className="relative">
        <div className="container flex mx-auto flex-wrap px-5 py-10 sm:flex-nowrap">
          <div className="lg:w-2/3 md:w-1/2 bg-slate-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27955.426953773884!2d-81.69798613014693!3d28.8558740562014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e798ec42fca523%3A0x6ae60df5f4b0c572!2sEustis%2C%20FL!5e0!3m2!1sen!2sus!4v1671146048291!5m2!1sen!2sus"
          />
          </div>
          <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <h2 className="mb-1 title-font sm:text-4xl text-3xl border-b-4 border-black text-center">
              Get In Contact!
            </h2>
            <a href="https://linkedin.com/in/joseph-a-wright-14362iw4e5tu/" className="py-2 flex justify-center">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <h3 className="text-center">Linkedin</h3>

            <a href="https://github.com/JosephW143" className="py-2 flex justify-center">
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <h3 className="text-center">GitHub</h3>

            <a href="#" className="py-2 flex justify-center">
              <FontAwesomeIcon icon={faPhone} size="4x" />
            </a>
            <h3 className="text-center">(407)516-0262</h3>

            <a href="mailto:josephwright1436@gmail.com" className="py-2 flex justify-center">
              <FontAwesomeIcon icon={faEnvelope} size="4x" />
            </a>
            <h3 className="text-center">josephwright1436@gmail.com</h3>
          </div>
        </div>
      </section>
    );
}

export default Contact;

