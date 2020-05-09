import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


let Dialog = (props) => {

    let dialogPath = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={dialogPath} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;