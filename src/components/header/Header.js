import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";

import {urls} from "../../services";
import css from './header.module.css'

const Header = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={css.header}>
            <div className={scroll === 0?css.maineDiv:css.maineDivScroll}>
                <div className={css.imgBlock}>
                    <img className={css.img} src={urls.pizzaLogo} alt="Logo"/>
                </div>
                <div className={css.navigationBlock}>
                    <NavLink className={css.nav} to={'/'}>Піца</NavLink>
                    <NavLink className={css.nav} to={'/drinks'}>Напої</NavLink>
                    <NavLink className={css.nav} to={'/sides'}>Сайди</NavLink>
                    <NavLink className={css.nav} to={'/deserts'}>Десерти</NavLink>
                    <NavLink className={css.nav} to={'/checkout'}>Кошик</NavLink>
                </div>
            </div>
        </div>
    );
};

export {Header};