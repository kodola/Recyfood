
import React, {useState} from "react";
import data from "../data/database";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const HamburgerMenu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevIsVisible => !prevIsVisible);
    };
    return (
        <>
            <HashRouter>
            <button className="hamburger_button open-menu" onClick={toggleMenu}> </button>
            {isMenuVisible && (
            <nav className="hamburger_open">
                <ul>
                    <li><Link to="/">GŁÓWNA</Link></li>
                    <li><Link to="/about">O APLIKACJI</Link></li>
                    <li><Link to="/howdoesitwork">JAK TO DZIAŁA?</Link></li>
                    <li><Link to="/contact">KONTAKT</Link></li>
                </ul>
            </nav>
            )}
            </HashRouter>
        </>
    );
};
export default HamburgerMenu;

