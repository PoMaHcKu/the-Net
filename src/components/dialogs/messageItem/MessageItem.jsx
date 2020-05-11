import React from "react";
import s from './MessageItem.module.css'
import Message from "./message/Message";

let MessageItem = (props) => {

    let messages = props.dialogsState.messages.map(
        (message) => <Message authorId={message.authorId} text={message.text}/>
    );

    let action = {
        type: '',
        updateTextNewMessage: ''
    };

    let newMessageElement = React.createRef();

    let addMessage = () => {
        action.type = 'ADD-MESSAGE';
        props.dispatcher(action);
    };

    let updateTextNewMessage = () => {
        action.type = 'UPDATE-NEW-MESSAGE-TEXT';
        action.updateTextNewMessage = newMessageElement.current.value;
        props.dispatcher(action);
    };

    return (
        <div className={s.messages}>
            {messages}
            <textarea
                onChange={updateTextNewMessage}
                className={s.textArea}
                ref={newMessageElement} cols={50}
                rows={3}
                value={props.dialogsState.newMessageText}/>
            <button className={s.sendButton} onClick={addMessage}>Send</button>
        </div>
    )
};

export default MessageItem;