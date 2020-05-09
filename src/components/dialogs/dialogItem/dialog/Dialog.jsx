import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";


let Dialog = (props) => {

    return (
        <div>
            <div className={s.dialog}>
                <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
            </div>
        </div>
    );
};

export default Dialog;