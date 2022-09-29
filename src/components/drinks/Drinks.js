import React from "react";

import {drinks} from "../../configs";
import {Drink} from "../drink/Drink";
import css from './drinks.module.css'

const Drinks = () => {
    return (
        <div className={css.block}>
            {drinks.map(drink => <Drink key={drink.id} drink={drink} />)}
        </div>

    );
};

export {Drinks};