import React, {useState} from "react";
import data from "../data/database";
import {HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";

const Generator = ({products, setProducts}) => {
    const chosenRecipe = [];

    data.forEach(obj => {
       let counter = 0;
       obj.items.forEach(p => {
           if(products.includes(p.name)) {
               counter++;
           }
       });

       if(obj.items.length === counter) {
           chosenRecipe.push(obj);
       }
    });
    console.log(chosenRecipe);


    const recipeName = [];
    const searchName = () => {
            chosenRecipe.forEach(product => {
                recipeName.push(product.dishName);
           });
        return recipeName;
    };
       console.log(recipeName);
       console.log(searchName());

    //
    // const recipeList = [];
    // const searchRecipe = () => {
    //     data.forEach(obj => {
    //         obj.items.forEach(product => {
    //             recipeList.push(product.name);
    //         });
    //     });
    //     return recipeList;
    // };
    //     console.log(recipeList);
    //     console.log(searchRecipe());
    //
    // const objList = [];
    // const searchObj = () => {
    //     data.forEach(obj => {
    //         objList.push(obj.items);
    //     });
    //     return objList;
    // };
    // console.log(objList);
    // console.log(searchObj());
    //
    // const concreteNames = [];
    // const checking = () => {
    //     objList.forEach(tab => {
    //         concreteNames.push(tab.name);
    //     });
    //     return concreteNames;
    // };
    // console.log(concreteNames);
    // console.log(checking);
    const objTab = [];
    const clicked = (item) => {
        data.forEach(obj => {
            if (obj.dishName===item) {
                    objTab.push(obj);
                console.log(objTab);
                }
        });
        console.log(item);
    };


        return (
            <>
                <section>
                    <div className="banner">
                        <p className="choosing_header">Z wybranych produktów:</p>
                        <p className="selected_products">{products.join(', ')}</p>
                        <p className="selected_second_par">Możesz przyrządzić: </p>
                        <ul className="selected_list">
                            {/*<li>{recipeName}</li>*/}
                            {chosenRecipe.map((item, index)=> <li key={index} onClick={()=> clicked(item)}><span className="solid"><Link className={"selected_recipe"} to={"/dish/"+item.id} >{item.dishName}</Link></span></li>)}
                        </ul>
                    </div>
                </section>
                <footer>
                    <div className="footer">
                        <Link className={"next_button"} to="/foodchoosing">Powrót</Link>
                    </div>
                </footer>

            </>
        )
};
export default Generator;
