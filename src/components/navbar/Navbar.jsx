import React from 'react';
import s from './Navbar.module.css'
import Menu from "./menu/Menu";
import Friends from "./friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <Menu/>
            <Friends friends={props.props.friends}/>
        </nav>
    );
};

export default Navbar;