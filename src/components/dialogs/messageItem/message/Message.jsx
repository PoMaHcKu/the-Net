import React from "react";
import s from "./Message.module.css";

let Message = (props) => {

    if (props.authorId === 3) {
        return (
            <div className={s.message + " " + s.myMessage}>{props.text}</div>
        );
    } else {
        return (
            <div className={s.message + " " + s.otherMessage}>{props.text}</div>
        );
    }
};

export default Message;