import React from "react";
import apeClub from "../../img/apeClub.jpg";
import pizzaHunt from '../../img/pizza-hunt.jpg';
import mmm from '../../img/mmm.jpg';
import dogPark from '../../img/dog-park.jpg';
import taskinator from '../../img/taskinator-pro.jpg';
import readme from '../../img/readme-gen.jpg';

function Portfolio () {
    return (    
    <div className="flex" id="portfolio">
        <div className="projectBox">
            <section className="container">
                <a href="https://mysterious-fjord-50002.herokuapp.com/">
                    <img src={apeClub} alt="screen shot of ape club website" />
                    <div className="projectTitle">
                        <h3>The Ape Club</h3>
                    </div>
                </a>
            </section>

            <section className="container">
                <a href="https://guarded-ocean-81781.herokuapp.com/">
                    <img src={pizzaHunt} alt="screen shot of readme generator github" />
                    <div className="projectTitle">
                        <h3>Pizza Hunt</h3>
                    </div>
                </a>
            </section>
        </div>

        <div className="projectBox">
            <section className="container">
                <a href="https://josephw143.github.io/Movie-Music-Magic/">
                    <img src={mmm} alt="screen shot of movie music magic website" />
                    <div className="projectTitle">
                            <h3>Movie Music Magic</h3>
                    </div>
                </a>
            </section>
    
            <section className="container">
                <a href="https://the-dog-park-flying-lizards.herokuapp.com/">
                    <img src={dogPark} alt="screen shot of dog park website" />
                    <div className="projectTitle">
                        <h3>The Dog Park</h3>
                    </div>
                </a>
            </section>
        </div>

        <div className="projectBox">
            <section className="container">
                <a href="https://josephw143.github.io/taskinator-pro/">
                    <img src={taskinator} alt="screen shot of taskinator pro website" />
                    <div className="projectTitle">
                        <h3>Taskinator Pro</h3>
                    </div>
                </a>
            </section>
    
            <section className="container">
                <a href="https://github.com/JosephW143/Professional-README-Generator">
                    <img src={readme} alt="screen shot of readme generator github" />
                    <div className="projectTitle">
                        <h3>Professional README Generator</h3>
                    </div>
                </a>
            </section>
        </div>
    </div>
    );
}

export default Portfolio;