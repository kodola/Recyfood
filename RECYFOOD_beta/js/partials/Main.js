import React from "react";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const Main = () => {

    return (
        <>
            <section>
                <div className="egg"></div>
                <div className="banner">
                    <div className="banner_main">
                        <div className="banner_text left_part">RECY</div>
                        <div className="banner_text right_part">FOOD</div>
                    </div>
                    <p className="banner_subtext">Piękno tkwi w prostocie!</p>
                </div>
            </section>
            <footer>
                <div className="footer">
                    <p className="footer_slogan">Nie wyrzucaj! Wykorzystaj!</p>
                    <Link className={"next_button"} to="/foodchoosing">GO!</Link>
                </div>
            </footer>
        </>
    )
};
export default Main;
