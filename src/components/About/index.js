import React from "react";

function About () {
    return (
        <section className="aboutMe" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left">
                        <img src="./images/joseph.JPG" alt="A photo of Joseph Wright" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6 text-right">
                        <p>
                            I am a up and coming developer who is very eager to work in the industry. At the UCF full stack developer Boot Camp I have leaned many langagues and technologies including HTML5, CSS, JavaScript, jQuery, MySQL, Express.js, and Node.js to name a few. Here are a few samples of my work. You can checkout the rest of my works at my GitHub that's linked at the bottom of the page. There you can also find my other contact information. Thank you for visiting my portfolio!
                        </p>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default About;