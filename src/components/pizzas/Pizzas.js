import React, {useState} from "react";

import {pizzas} from "../../configs";
import {Pizza} from "../pizza/Pizza";
import css from './pizzas.module.css'


const Pizzas = () => {

    return (
        <div className={css.pizzasBlock}>
            {pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza}/>)}
        </div>
    );
};

export {Pizzas};