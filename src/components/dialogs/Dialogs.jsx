import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./messageItem/Message";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/state";

let Dialogs = (props) => {

    let dialogElements = props.dialogsState.dialogs.map( dialog =>
        <Dialog id={dialog.id} name={dialog.name} />
        );

    let messageElements = props.dialogsState.messages.map(message =>
      <Message message={message.text}/>
    );

    let newMessageText = props.dialogsState.newMessageText;

    let addMessage = () => {
        props.dispatcher(addMessageActionCreator());
    };

    let updateTextNewMessage = (text) => {
        let newText = text.target.value;
        props.dispatcher(
            updateTextNewMessageActionCreator(newText));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placeholder={"Enter your message"}
                                  maxLength={500} rows={2}
                                  cols={40}
                                  className={s.textArea}
                                  value={newMessageText}
                                  onChange={updateTextNewMessage}
                        />
                    </div>
                    <div><button onClick={addMessage}>SEND</button></div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;