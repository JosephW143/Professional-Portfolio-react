import React from "react";

function About () {
    return (
        <section id="about">
            <div className="container relative mx-auto min-h-screen px-4 overflow-hidden">
                <div className="absolute top-4 left-2 md:left-4 md:w-1/2 w-11/12 lg:pr-24 md:pr-16 pt-24 flex flex-col md:items-start md:text-left items-center text-center">
                    <h2 className="title-font sm:text-7xl text-3xl mb-4">
                        <span className="bg-gradient-to-r from-[#FFF] to-[#5941A9] bg-clip-text text-transparent">&lt;Hello World!/&gt;</span>
                    </h2>
                    <p className="leading-relaxed mb-8 p-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="absolute bottom-1 right-2 md:right-1 md:w-1/2 w-11/12 lg:max-w-lg flex flex-col md:items-end md:text-right items-center text-center">
                    <h2 className="title-font sm:text-7xl text-3xl mb-4">
                        <span className="bg-gradient-to-l from-[#FFF] to-[#5941A9] bg-clip-text text-transparent">&lt;Hello World!/&gt;</span>
                    </h2>
                    <p className="leading-relaxed mb-8 p-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;