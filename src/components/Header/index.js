import React from "react";

function Header() {
    return (
        <header className="bg-info align-center flex-row">
            <div className="flex-row justify-space-between align-center container">
                <h1 className="font-weight-bold text-center">Joseph Wright</h1>

                <nav className="flex flex-wrap justify-space-between">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href='#about'
                            >About</a>
                        </li>
                        <li className="list-inline-item">
                            <a href='#contact'
                            >Contact</a>
                        </li>
                        <li className="list-inline-item">
                            <a href='www.linkedin.com/in/joseph-a-wright-14362iw4e5tu'
                            >Resume</a>
                        </li>
                        <li className="list-inline-item">
                            <a href='#portfolio'
                            >Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;