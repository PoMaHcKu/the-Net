import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./dialog/Dialog";
import Message from "./messageItem/Message";

let Dialogs = (props) => {
    let dialogElements = props.dialogs.map(dialog =>
        <Dialog key={dialog.id} name={dialog.name}/>
    );

    let messageElements = props.messages.map(message =>
        <Message message={message.text}/>
    );

    let addMessage = () => {
        props.addMessage();
    };

    let updateTextNewMessage = (e) => {
        let newText = e.target.value;
        props.updateTextNewMessage(newText);
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
                                  value={props.newMessageText}
                                  onChange={updateTextNewMessage}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;