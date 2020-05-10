import React from "react";
import s from './MessageItem.module.css'
import Message from "./message/Message";

let MessageItem = (props) => {

    let messages = props.messages.map(
        (message) => <Message authorId={message.authorId} text={message.text}/>
    );

    return (
        <div className={s.messages}>
            {messages}
        </div>
    )
};

export default MessageItem;