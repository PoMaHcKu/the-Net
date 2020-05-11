import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./dialogItem/DialogItem";
import MessageItem from "./messageItem/MessageItem";

let Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <DialogItem dialogs={props.dialogsState.dialogs}/>
            <MessageItem dialogsState={props.dialogsState}
                         dispatcher={props.dispatcher}
            />
        </div>
    )
};

export default Dialogs;