import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src='https://freesvg.org/img/1414959728.png' alt={"Logo"}/>
        </div>
        <div className={s.textLogo}>
            <span>the Net</span>
        </div>
        <div className={s.loginBlock}>
            {props.isAuth ?
                <span>{props.login}</span> :
                <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
};

export default Header;