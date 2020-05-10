import React from "react";
import s from './DialogsItem.module.css'
import Dialog from "./dialog/Dialog";

let DialogItem = (props) => {
    let dialogs = props.dialogs.map(
        (dialog) => <Dialog id={dialog.id} name={dialog.name}/>
    );

    return (
        <div className={s.dialogItems}>
            {dialogs}
        </div>
    )
};

export default DialogItem;