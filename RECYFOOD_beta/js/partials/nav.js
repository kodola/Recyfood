import ReactDOM from "react-dom";
import React from "react";
import { HashRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import '../../scss/main.scss';
import Main from "./Main";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

const Nav = () => {
    return (
        <nav>
            <HashRouter>
                <ul>
                    <li><NavLink to="/">GŁÓWNA</NavLink></li>
                    <li><NavLink to="/about">O STRONIE</NavLink></li>
                    <li><NavLink to="/howdoesitwork">JAK TO DZIAŁA?</NavLink></li>
                    <li><NavLink to="/contact">KONTAKT</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/howdoesitwork" component={Work}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </HashRouter>
        </nav>
    )
};

export default Nav;

ReactDOM.render(<Nav/>, document.getElementById("Nav"));