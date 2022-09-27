import {NavLink} from "react-router-dom";

import {urls} from "../../services";

const Header = () => {
    return (
        <div>
            <img src={urls.pizzaLogo} alt=""/>
            <NavLink to={'/'}/>
            <NavLink to={'/drinks'}/>
            <NavLink to={'/sides'}/>
            <NavLink to={'/deserts'}/>
            <NavLink to={'/checkout'}/>
        </div>
    );
};

export {Header};