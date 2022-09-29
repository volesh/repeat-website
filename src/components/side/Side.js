import React from "react";
import {useState} from "react";

import {ButtonAdd} from "../buttonAdd/ButtonAdd";
import {ButtonToBusket} from "../buttonToBusket/ButtonToBusket";
import {order} from "../../configs";
import css from './side.module.css'

const Side = ({side}) => {

    let [someOrder, setSomeOrder] = useState([])

    let id = side.id

    let po = order.sideOrder

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
                {someOrder.includes(id)?<ButtonAdd po={po} setSomeOrder={setSomeOrder} someOrder={someOrder} id={id}/>:<ButtonToBusket po={po} setSomeOrder={setSomeOrder} someOrder={someOrder} id={id}/>}
            </div>
        </div>
    );
};

export {Side};