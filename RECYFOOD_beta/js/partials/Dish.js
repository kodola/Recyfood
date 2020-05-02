import React, {useState} from "react";
import data from "../data/database";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const Dish = ({products, setProducts, match}) => {

    console.log(match);

    const idDish = parseInt(match.params.id);
/*

    const objTab = [];
    const dish1 = () => {
        data.forEach(obj => {
            if (obj.id===idDish) {
                objTab.push(obj.dishName);
                console.log(objTab);
            }
        });
        return objTab;
    };
    console.log(objTab);
    console.log(idDish);*/

    const ingredients = [];
    const units = [];
    const counts = [];

    let dish = null;
    data.forEach(obj => {
        obj.items.filter(item => {
            if(obj.id===idDish) {
                ingredients.push(item.name);
                units.push(item.unit);
                counts.push(item.count);

                dish = obj;
            }
        });
    });
    console.log(ingredients);
    console.log(units);
    console.log(counts);

    const mainName = [];
    const funnyStuff = [];

    data.forEach(obj => {
            if(obj.id===idDish) {
                mainName.push(obj.dishName);
                funnyStuff.push(obj.funny);
                /*description.push(obj.desc)*/
            }
    });
    console.log(mainName);
    console.log(funnyStuff);
/*    const description = [];
    console.log(description);
    const a = [...description].map((item, index) => item);
    console.log(a);*/

    return (
        <>
            <section>
                <div className="banner recipe"> {/*{ idDish }*/}
                    <div className="recipe_napkin"/>
                        <div className="recipe_elements">
                            <div className="recipe_name">{mainName}</div>
                            <div className="recipe_funny">{funnyStuff}</div>
                                <ul className="recipe_ingredients">SKŁADNIKI:
                                    {
                                        dish.items.map(item => <li>- {item.name}: {item.count} {item.unit}</li>)
                                    }
                                </ul>

                                <ol className="recipe_method">SPOSÓB PRZYGOTOWANIA:
                                    {
                                        dish.desc.map( item => <li>{item}</li>)
                                    }
                                </ol>
                            <div className="recipe_enjoy">SMACZNEGO!!!</div>
                        </div>
                    </div>
            </section>
            <footer>
                <div className="footer">
                    <Link className={"next_button"} to="/chooserecipe">Powrót</Link>
                </div>
            </footer>
            </>
    )
};
export default Dish;
