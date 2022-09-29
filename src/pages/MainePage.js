import React from "react";

import css from './maine.module.css'
import {Drinks, Pizzas} from "../components";


const MainePage = () => {
    return (
        <div>
            <h2>Піца</h2>
            <Pizzas/>
            <h2>Напої</h2>
            <Drinks/>
        </div>
    );
};

export {MainePage};