import React from "react";

import css from './buttonToBusket.module.css'

const ButtonToBusket = ({setSomeOrder, someOrder, id, po}) => {
    const click = () =>{
        let order = [...someOrder]
        order.push(id)
        setSomeOrder([...order])
        po.push(id)
    }
    return (
        <div className={css.btn} onClick={click}>
            В кошик
        </div>
    );
};

export {ButtonToBusket};