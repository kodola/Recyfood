import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <section>
                <div className="banner nav_content">
                    <div className="nav_background"/>
                    <div className="nav_elements">
                        <div className="nav_header">O APLIKACJI</div>
                        <div className="nav_description">{/*Aplikacja powstała z myślą osobach, którym nie chce się rozpracowywać
                        skomplikowanych przepisów ani kupować ogromnej ilości produktów, z których połowa będzie leżała*/}
                            <p>Jeśli nie chcesz kupować ogromnej ilości zbędnych produktów,
                            z których później połowa stoi w szafkach i zbiera kurz
                            (lub co gorsza psuje się i traci datę ważności)</p>
                            <p>Jeśli wkurza Cię stopień skomplikowania potraw i potrzebujesz
                            prostego przepisu by móc wykonać danie</p>
                            <p>Jeśli chcesz przyrządzić posiłek z produktów,
                                które zawsze masz w domu</p>
                            <p className="last">- Ta aplikacja jest dla Ciebie!</p>
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
