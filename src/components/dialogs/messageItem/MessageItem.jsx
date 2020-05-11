import React from "react";
import s from './MessageItem.module.css'
import Message from "./message/Message";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../../redux/state";

let MessageItem = (props) => {

    let messages = props.dialogsState.messages.map(
        (message) => <Message authorId={message.authorId} text={message.text}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatcher(addMessageActionCreator());
    };

    let updateTextNewMessage = () => {
        props.dispatcher(
            updateTextNewMessageActionCreator(
                newMessageElement.current.value));
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