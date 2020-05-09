import React from "react";
import m from "./Message.module.css";

let Message = (props) => {
    return (
        <div className={m.message}>{props.text}</div>
    );
};

export default Message;