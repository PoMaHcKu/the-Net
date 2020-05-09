import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return <footer className={s.footer}>
        <img src='https://freesvg.org/img/1414959728.png' alt={"Logo"}/>
        <div>
            <span className={s.sign}>Without mom, dad or credits!</span>
        </div>
    </footer>
};

export default Footer;