import React, {useState} from "react";
import data from "../data/database";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const Go = ({products, setProducts}) => {
    // console.log(props, data);
    // console.log(props.products);
    const productsList = [];
    const filtered = [];
    const getProducts = () => {
        data.forEach(obj => {
            obj.items.forEach(product => {
                if(productsList.indexOf(product.name) === -1) {
                    productsList.push(product.name);
                }
                productsList.sort();
            });
        });
        return productsList;
    };
    console.log( getProducts() );
    const choosed = (item) => {
        setProducts( prev => {
                if(prev.includes(item)) {
                    return prev.filter(i => i !== item);
                } else {
                    return [...prev, item];
                }
            });
        };

    const isChoosed = item => {
        if (products.indexOf(item) === -1) {
            return false;
        }
        return true;
    };
    const chosenTab = [];
    chosenTab.push(products);
    console.log(chosenTab);
    return (
        <>
            <section>
                <div className="banner">
                    <p className="choosing_header">Co masz dzisiaj w lodówce?</p>
                    <ul className="choosing_list">
                        {productsList.map((item, index)=> <li className={ isChoosed(item) ? 'selected' : ''} key={index} onClick={()=> choosed(item)}>{item}</li>)}
                    </ul>
                </div>
            </section>
            <footer>
                <div className="footer">
                    <p className="footer_slogan">*w ilości składników nie uwzględniono podstawowych dodatków, takich jak:
                        sól, pieprz i olej. Założono, że na 99% masz je w domu :)
                    </p>
                    <Link className={"next_button"} to="/chooserecipe">GO!</Link>
                </div>
            </footer>

        </>
    )
};
export default Go;
