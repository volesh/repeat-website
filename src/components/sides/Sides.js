import React from "react";

import {sides} from "../../configs";
import {Side} from "../side/Side";
import css from './sides.module.css'

const Sides = () => {
    return (
        <div className={css.block}>
            {sides.map(side => <Side key={side.id} side={side}/>)}
        </div>
    );
};

export {Sides};