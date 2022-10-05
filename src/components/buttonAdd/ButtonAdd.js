import React, {useState} from "react";

import css from './button.module.css'
import {useDispatch} from "react-redux";


const ButtonAdd = ({id, typePlus,typeMinus}) => {
    let [count, setCount] = useState(1);
    let dispath = useDispatch()

    const decremen = () =>{
        setCount(count-1)
        dispath({type: typeMinus, id})
    };
    const increment = () => {
        setCount(count+1)
        dispath({type: typePlus, id})
    }

    return (
        <div className={css.btnDiv}>
            <button className={css.btn} onClick={decremen}>-</button>
            <p className={css.text}>{count}</p>
            <button className={css.btn} onClick={increment}>+</button>
        </div>
    );
};

export {ButtonAdd};