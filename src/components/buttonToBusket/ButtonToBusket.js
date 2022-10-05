import React from "react";
import {useDispatch} from "react-redux";

import css from './buttonToBusket.module.css'


const ButtonToBusket = ({type, id}) => {
    let dispath = useDispatch()

    const click = () =>{
        dispath({type, payload:id})

    }
    return (
        <div className={css.btn} onClick={click}>
            В кошик
        </div>
    );
};

export {ButtonToBusket};