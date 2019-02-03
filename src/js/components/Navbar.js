import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {toggle} from "../utils/navbarUtils";

class Navbar extends React.Component {

    toggleNavbar() {
        toggle();
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