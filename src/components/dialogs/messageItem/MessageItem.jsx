import React from "react";
import s from './MessageItem.module.css'
import Message from "./message/Message";

let MessageItem = (props) => {

    let messages = props.messages.map(
        (message) => <Message authorId={message.authorId} text={message.text}/>
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addNewMessage();
    };

    let updateTextCurrentMessage = () => {
        let text = newMessageElement.current.value;
        props.updateTextCurrentMessage(text);
    };

    return (
        <div className={s.messages}>
            {messages}
            <textarea
                onChange={updateTextCurrentMessage}
                className={s.textArea}
                ref={newMessageElement} cols={50}
                rows={3}
                value={props.currentMessage}/>
            <button className={s.sendButton} onClick={addMessage}>Send</button>
        </div>
    )
};

export default MessageItem;