import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <header className={s.header}>
        <div className={s.logo}>
            <img src='https://freesvg.org/img/1414959728.png' alt={"Logo"}/>
        </div>
        <div className={s.textLogo}>
            <span>the Net</span>
        </div>
    </header>
};

export default Header;