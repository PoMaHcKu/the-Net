import React from "react";
import s from './DialogsItem.module.css'

let DialogItem = (props) => {

    return (
        <div className={s.dialogItems}>
            {props.props}
        </div>
    )
};

export default DialogItem;