import React from "react";
import me from '../img/joseph.JPG';

function About () {
    return (
        <section id="about">
            <div className="container flex mx-auto px-10 py-20 md:flex-row flex-col items-center">
                <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 border-b-4 border-black">About Me</h2>
                    <p className="leading-relaxed mb-8 border-8 border-double rounded-md border-black">
                    Full-stack web developer leveraging customer service background to build a more human user experience on the web. Recently earned a certificate in full-stack development from the The University of Central Florida, with newly developed skills in HTML, CSS, JavaScript, React.js, and responsive web design. Known as an innovative problem solver passionate about developing apps, focusing on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience while also furthering my skills. I applied aspects of UX and agile development in a recent project. I worked on a team of six to develop a single-page MERN app that helps gym rats find new workouts to try out as well as save their favorites to their own personal account. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.
                    </p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-center object-cover border-4 rounded-3xl border-black" src={me} alt="A photo of Joseph Wright" />
                </div>
            </div>
        </section>
    );
}

export default About;