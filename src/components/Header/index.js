import React from "react";

function Header() {
    return (
        <header className="bg-info align-center flex-row">
            <div className="flex-row justify-space-between justify-center align-center container">
                <h1 className="font-weight-bold">Joseph Wright</h1>

                <nav>
                    <a href='#about'
                    >About</a>
                    <a href='#contact'
                    >Contact</a>
                    <a href='www.linkedin.com/in/joseph-a-wright-14362iw4e5tu'
                    >Resume</a>
                    <a href='#portfolio'
                    >Portfolio</a>
                </nav>
            </div>
            
        </header>
    );
}

export default Header;