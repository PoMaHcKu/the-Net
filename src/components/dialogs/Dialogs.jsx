import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog.jsx";
import Message from "./message/Message";

let Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog id={1} name={"Dimos"}/>
                <Dialog id={2} name={"Vika"}/>
                <Dialog id={3} name={"Kenny"}/>
                <Dialog id={4} name={"Valera"}/>
            </div>
            <div className={s.messages}>
                <Message text={"Hi"}/>
                <Message text={"Hello"}/>
                <Message text={"How is your react?"}/>
            </div>
        </div>
    )
};

export default Dialogs;