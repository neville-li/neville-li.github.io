import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component {


    toggleNavbar() {    
        const navbar  = document.querySelector(".nav__navbar");
        const nav = document.querySelector(".nav");
        navbar.style.top = `${nav.clientHeight}px`;
        navbar.style.display = navbar.style.display !== "flex" ? "flex" : "none";
    }
    render() {
        return (
            <nav className="nav">
                <h1 className="nav__brand">Neville Li</h1>
                <button 
                    onClick={this.toggleNavbar}
                    className="nav__toggleButton"
                >
                    <FontAwesomeIcon className="nav__icon" icon="bars" />
                </button>
                <ol className="nav__navbar">
                    <li className="nav__navbar__item">
                        Home
                    </li>
                    <li className="nav__navbar__item">
                        Projects
                    </li>
                    <li className="nav__navbar__item">
                        Contact
                    </li>
                </ol>
            </nav>
        );
    }
};

export default Navbar;