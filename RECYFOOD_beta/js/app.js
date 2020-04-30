import ReactDOM from "react-dom";
import React, {useState} from "react";
import { HashRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import '../scss/main.scss';
import Main from "./partials/Main";
import About from "./partials/About";
import Work from "./partials/Work";
import Contact from "./partials/Contact";
import Go from "./partials/Go";
import Generator from "./partials/Generator";
import Dish from "./partials/Dish";
import HamburgerMenu from "./partials/Hamburger_menu";

const App = () => {
   const [products, setProducts] = useState([]);
   return (
        <>
            <HashRouter>
                <header>
                    <div className="container">
                        <div className="hamburger_menu">
                            <button className="hamburger_button"></button>
                            {/*{<HamburgerMenu/>}*/}
                        </div>
                            <nav className="desktop_menu">
                                <ul className="hyperlink">
                                    <li><NavLink to="/">GŁÓWNA</NavLink></li>
                                    <li><NavLink to="/about">O APLIKACJI</NavLink></li>
                                    <li><NavLink to="/howdoesitwork">JAK TO DZIAŁA?</NavLink></li>
                                    <li><NavLink to="/contact">KONTAKT</NavLink></li>
                                </ul>
                            </nav>
                    </div>
                </header>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/howdoesitwork" component={Work}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/foodchoosing" render={() => <Go products={products} setProducts={setProducts}/>}/>
                    <Route path="/chooserecipe" render={() => <Generator products={products} setProducts={setProducts}/>}/>
                    <Route path="/dish/:id" render={props => <Dish products={products} setProducts={setProducts} {...props} />}/>
                </Switch>
            </HashRouter>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));