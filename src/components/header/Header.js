import {NavLink} from "react-router-dom";

import {urls} from "../../services";

const Header = () => {
    return (
        <div>
            <img src={urls.pizzaLogo} alt="Logo"/>
            <NavLink to={'/'}>Піца</NavLink>
            <NavLink to={'/drinks'}>Напої</NavLink>
            <NavLink to={'/sides'}>Сайди</NavLink>
            <NavLink to={'/deserts'}>Десерти</NavLink>
            <NavLink to={'/checkout'}>Кошик</NavLink>
        </div>
    );
};

export {Header};