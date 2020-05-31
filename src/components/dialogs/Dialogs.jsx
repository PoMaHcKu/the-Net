import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./messageItem/Message";
import MessageForm from "./message-form/MessageForm";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog =>
        <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
    );

    let messageElements = props.messages.map(message =>
        <Message key={message.id} message={message.text}/>
    );

    const addNewMessage = (form) => {
        props.addMessage(form.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <MessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
};

export default Dialogs;