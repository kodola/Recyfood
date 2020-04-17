import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <section>
                <div className="banner">
                    <div className="nav_background">
                        <div className="nav_elements">
                            <div className="nav_header">O APLIKACJI</div>
                            <div className="nav_description">
                                <p>Jeśli nie chcesz kupować ogromnej ilości zbędnych produktów, <br/>
                                    z których później połowa stoi w szafkach i zbiera kurz <br/>
                                    (lub co gorsza psuje się i traci datę ważności)</p>
                                <p>Jeśli wkurza Cię stopień skomplikowania potraw <br/>
                                    i potrzebujesz prostego przepisu by móc wykonać danie</p>
                                <p>Jeśli chcesz przyrządzić posiłek z produktów,<br/>
                                które zawsze masz w domu</p>
                                <p className="last">- Ta aplikacja jest dla Ciebie!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer"> </div>
            </footer>
        </>
    )
};
export default About;
