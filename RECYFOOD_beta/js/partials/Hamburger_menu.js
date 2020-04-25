/*
import React, {useState} from "react";
import data from "../data/database";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const HamburgerMenu = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const showMenu = () => {
        setMenuVisible(true);
    };
    const hideMenu = () => {
        setMenuVisible(false);
    };
    return (
        <>
            <a href="#" className="open-menu" onClick={showMenu}> </a>
            <nav className={!isMenuVisible && "hide"}>
                <ul>
                    <li>
                        <a href="#">główna</a>
                    </li>
                    <li>
                        <a href="#">o stronie</a>
                    </li>
                    <li>
                        <a href="#">jak to działa?</a>
                    </li>
                    <li>
                        <a href="#">kontakt</a>
                    </li>
                </ul>
                <a href="#" className="close-menu" onClick={hideMenu}>
                    Zamknij menu
                </a>
            </nav>
        </>
    );
};
export default HamburgerMenu;
*/
