import React, {useState} from "react";

import css from './button.module.css'


const ButtonAdd = ({setSomeOrder, someOrder, id, po}) => {
    let [count, setCount] = useState(1);
    const decremen = () =>{
        setCount(count-1)
        let order = [...someOrder]
        order.pop(id)
        setSomeOrder([...order])
        po.pop(id)
        console.log(po);
    };
    const increment = () => {
        setCount(count+1)
        let order = [...someOrder]
        order.push(id)
        setSomeOrder([...order])
        po.push(id)
        console.log(po);
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