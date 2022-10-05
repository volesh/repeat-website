import React, {useEffect, useState} from "react";

import css from './pizza.module.css'
import {ButtonToBusket} from "../buttonToBusket/ButtonToBusket";
import {ButtonAdd} from "../buttonAdd/ButtonAdd";


const Pizza = ({pizza}) => {
    let [choose1, setChoose1] = useState(1);
    let [choose2, setChoose2] = useState(1);
    let [price, setPrice] = useState(Number(pizza.price));
    let [someOrder, setSomeOrder] = useState([])
    let [weight, serWeight] = useState(pizza.weight)

    let id = pizza.id

    const clickChooser1 = (n) =>{
        setChoose1(n)
    };

    const clickChooser2 = (n) =>{
        setChoose2(n)
    };

    useEffect(()=>{
        if (choose1 === 3 && choose2===1){
            serWeight(Number(pizza.weight) +277)
        }else if (choose1 === 3 && choose2===2){
            serWeight(Number(pizza.weight) +50)
        }else if(choose1===1 && choose2===1){
            serWeight(pizza.weight)
        }else if(choose1===1 && choose2===2){
            serWeight(Number(pizza.weight) -179)
        }
        if(choose1 === 1 && choose2 === 3){
            setPrice(Number(pizza.price) + 44)
            serWeight(Number(pizza.weight) -29)
        }else if(choose1 === 1 && choose2 === 4){
            setPrice(Number(pizza.price) + 53)
            serWeight(Number(pizza.weight) +28)
        }else if((choose1 === 2 && choose2 === 1) || (choose1 === 2 && choose2 === 2)){
            setPrice(Number(pizza.price) + 40)
            if(choose1===2 && choose2===2){
                serWeight(Number(pizza.weight) -35)
            }else serWeight(Number(pizza.weight) +195)
        }else if(choose1 === 2 && choose2 === 3){
            setPrice(Number(pizza.price) + 93)
            serWeight(Number(pizza.weight) +180)
        }else if(choose1 === 2 && choose2 === 4){
            setPrice(Number(pizza.price) + 100)
            serWeight(Number(pizza.weight) +234)
        }else if((choose1 === 3 && choose2 === 1) || (choose1 === 3 && choose2 === 2) || (choose1 === 3 && choose2 ===3) || (choose1 === 3 && choose2 === 4)){
            if(choose2 === 3 || choose2 === 4){
                setChoose2(1)
                setPrice(Number(pizza.price) + 70)
            }
            setPrice(Number(pizza.price) + 70)

        }else {
            setPrice(Number(pizza.price))
        }


    },[choose1,choose2])

    return (
        <div className={css.card}>

            <div className={css.imgDiv}>
                <img className={css.img} src={pizza.img} alt=""/>
                <p className={css.weight}>{weight} г</p>
            </div>

            <p className={css.name}>{pizza.name}</p>

            <div className={css.ing}>
                {pizza.ingredients.join(', ')}
            </div>

            <div className={css.chooser}>
                <span className={choose1 !== 1?css.choose1:css.choosed1} onClick={()=>clickChooser1(1)}>Cтандартна</span>
                <span className={choose1 !== 2?css.choose1:css.choosed1} onClick={()=>clickChooser1(2)}>Велика</span>
                <span className={choose1 !== 3?css.choose1:css.choosed1} onClick={()=>clickChooser1(3)}>XXl</span>
            </div>

            <div className={css.chooser}>
                <button  className={choose2 !== 1?css.choose2:css.choosed2} onClick={()=>clickChooser2(1)}>Стандартне</button>
                <button className={choose2 !== 2?css.choose2:css.choosed2} onClick={()=>clickChooser2(2)}>Тонке</button>
                <button disabled={choose1===3} className={choose2 !== 3?css.choose2:css.choosed2} onClick={()=>clickChooser2(3)}>Філадельфія</button>
                <button disabled={choose1===3} className={choose2 !== 4?css.choose2:css.choosed2} onClick={()=>clickChooser2(4)}>Борт Хот-Дог</button>
            </div>

            <div className={css.lastDiv}>
                <p>{price} <span>грн</span></p>
                {someOrder.includes(id)?<ButtonAdd type={'ADD_PIZZA'} id={id}/>:<ButtonToBusket type={'ADD_PIZZA'} id={id}/>}
            </div>

        </div>
    );
};

export {Pizza};