import React from "react";
import {useState} from "react";

import {ButtonAdd} from "../buttonAdd/ButtonAdd";
import {ButtonToBusket} from "../buttonToBusket/ButtonToBusket";
import css from './drink.module.css'

const Drink = ({drink}) => {

    let [someOrder, setSomeOrder] = useState([])

    let id = drink.id


    return (
        <div className={css.card}>
            <div className={css.imgDiv}>
                <img className={css.img} src={drink.img} alt=""/>
            </div>
            <p className={css.name}>{drink.name}</p>
            <div className={css.volume}>{drink.volume}</div>
            <div className={css.lastDiv}>
                <p>{drink.price} <span>грн</span></p>
                {someOrder.includes(id)?<ButtonAdd type={'ADD_DRINK'} id={id}/>:<ButtonToBusket type={'ADD_DRINK'} id={id}/>}
            </div>
        </div>
    );
};

export {Drink};