import React from "react";

function Header() {
    return (
        <header className="md:sticky bg-slate-200 top-0 z-10">
            <div className="flex flex-wrap mx-auto items-center container p-5 md:flex-row">
                <h1 className="title-font font-large mb-4 md:mb-0">Joseph Wright</h1>

                <nav className="flex flex-wrap justify-center items-center text-base md:mr-auto md:ml-5 md:pl-5">
                        <a href='#about' className="mr-5"
                        >About
                        </a>
                        <a href='#contact' className="mr-5"
                        >Contact
                        </a>
                        <a href='https://docs.google.com/document/d/1KXas9Rav2MdlqBUNe08ixiIpp9GIZWw2AUg3Of8DRxM/edit?usp=sharing' className="mr-5"
                        >Resume
                        </a>
                        <a href='#portfolio' className="mr-5"
                        >Portfolio
                        </a>
                </nav>
            </div>     
        </header>
    );
}

export default Header;