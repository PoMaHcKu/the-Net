import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

let Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogItem props={props.dialogs}/>
            <MessageItem props={props.messages}/>
        </div>
    )
};

export default Dialogs;