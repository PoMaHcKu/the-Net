import React from 'react';
import s from './Author.module.css'

const Author = (props) => {
    return (
        <div className={s.author}>
            <span>{props.name}, {props.age}</span><br/>
        </div>
    );
};

export default Author;