import React from "react";

import css from './pizza.module.css'

const Pizza = ({pizza}) => {
    return (
        <div className={css.card}>

            <div className={css.imgDiv}>
                <img className={css.img} src={pizza.img} alt=""/>
                <p className={css.weight}>{pizza.weight} г</p>
            </div>

            <p className={css.name}>{pizza.name}</p>

            <div className={css.ing}>
                {pizza.ingredients.join(', ')}
            </div>

            <div className={css.chooser}>
                <span className={css.choose1}>Cтандартна</span>
                <span className={css.choose1}>Велика</span>
                <span className={css.choose1}>XXl</span>
            </div>

            <div className={css.chooser}>
                <span className={css.choose2}>Стандартне</span>
                <span className={css.choose2}>Тонке</span>
                <span className={css.choose2}>Філадельфія</span>
                <span className={css.choose2}>Борт Хот-Дог</span>
            </div>

            <div className={css.lastDiv}>
                <p>{pizza.price} грн</p>
                <button>В кошик</button>
            </div>

        </div>
    );
};

export {Pizza};