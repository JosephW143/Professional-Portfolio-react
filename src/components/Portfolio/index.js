import React from "react";

function Portfolio () {
    return (
        <div className="flex">
        <div className="centerBox">
            <h2 className="sectionTitle" id="projects">
                Projects
            </h2>
            <section className="centerPiece">
                <a href="https://josephw143.github.io/run-buddy/">
                    <img src="./images/run-buddy.jpg" alt="screen shot of run buddy website" />
                    <div className="projectTitle">
                        <h3>Run Buddy</h3>
                    </div>
                </a>
            </section>

        <div className="buffer">
            <div className="spacer"></div>
        </div>

        <div className="projectBox">
            <section className="container">
                <a href="https://josephw143.github.io/Movie-Music-Magic/">
                    <img src="/images/mmm.jpg" alt="screen shot of movie music magic website" />
                    <div className="projectTitle">
                            <h3>Movie Music Magic</h3>
                    </div>
                </a>
            </section>
    
            <section className="container">
                <a href="https://the-dog-park-flying-lizards.herokuapp.com/">
                    <img src="/images/dog-park.jpg" alt="screen shot of dog park website" />
                    <div className="projectTitle">
                        <h3>The Dog Park</h3>
                    </div>
                </a>
            </section>
        </div>

        <div className="projectBox">
            <section className="container">
                <a href="https://josephw143.github.io/taskinator-pro/">
                    <img src="/images/taskinator-pro.jpg" alt="screen shot of taskinator pro website" />
                    <div className="projectTitle">
                        <h3>Taskinator Pro</h3>
                    </div>
                </a>
            </section>
    
            <section className="container">
                <a href="https://github.com/JosephW143/Professional-README-Generator">
                    <img src="/images/readme-gen.jpg" alt="screen shot of readme generator github" />
                    <div className="projectTitle">
                        <h3>Professional README Generator</h3>
                    </div>
                </a>
            </section>
        </div>
        <div className="projectBox">
            <section className="container">
                <a href="https://guarded-ocean-81781.herokuapp.com/">
                    <img src="/images/pizza-hunt.jpg" alt="screen shot of readme generator github" />
                    <div className="projectTitle">
                        <h3>Pizza Hunt</h3>
                    </div>
                </a>
            </section>
        </div>
    </div>
    </div>
    

    );
}

export default Portfolio;