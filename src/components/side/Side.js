import React from "react";
import {useState} from "react";

import {ButtonAdd} from "../buttonAdd/ButtonAdd";
import {ButtonToBusket} from "../buttonToBusket/ButtonToBusket";
import css from './side.module.css'


const Side = ({side}) => {

    let [someOrder, setSomeOrder] = useState([])

    let id = side.id


    return (
        <div className={css.card}>
            <div className={css.imgDiv}>
                <img className={css.img} src={side.img} alt=""/>
                <p className={css.weight}>{side.weight} г</p>
            </div>
            <p className={css.name}>{side.name}</p>
            <div className={css.standart}>Стандарт</div>
            <div className={css.lastDiv}>
                <p>{side.price} <span>грн</span></p>
                {someOrder.includes(id)?<ButtonAdd type={'ADD_SIDE'} id={id}/>:<ButtonToBusket type={'ADD_SIDE'} id={id}/>}
            </div>
        </div>
    );
};

export {Side};