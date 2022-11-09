import React from "react";

const Footer = () => {
    return (
        <footer className="bg-info flex-row align-center ">
            <nav className="mx-auto p-3">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href='https://github.com/JosephW143'>
                            GitHub
                        </a>
                    </li>

                    <li className="list-inline-item">
                        <a href='www.linkedin.com/in/joseph-a-wright-14362iw4e5tu'>
                            Linkedin
                        </a>
                    </li>

                    <li className="list-inline-item">
                        <a href='mailto:josephwright1436@gmail.com'>
                            Email
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer; 