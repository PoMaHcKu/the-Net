import React from 'react';
import s from './Friend.module.css';

let Friend = (props) => {

    return (
        <div className={s.friend}>
            <img src={props.avatar} alt={"AVA"}/>
            <div>
                <span>{props.firstName + " " + props.lastName}</span>
            </div>
        </div>
    );
};

export default Friend;