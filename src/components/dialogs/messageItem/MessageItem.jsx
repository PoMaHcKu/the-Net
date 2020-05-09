import React from "react";
import s from './MessageItem.module.css'

let MessageItem = (props) => {

    return (
        <div className={s.messages}>
            {props.props}
        </div>
    )
};

export default MessageItem;