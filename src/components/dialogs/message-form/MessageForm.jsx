import React from "react";
import {Field, reduxForm} from "redux-form";

let MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newMessageText"}
                       placeholder={"Enter your message"}
                       rows={2}
                       cols={40}
                       maxLength={500}
                       component={"textarea"}
                />
            </div>
            <div>
                <button>SEND</button>
            </div>
        </form>
    )
};

MessageForm = reduxForm({form: "dialogAddMessageForm"})(MessageForm);

export default MessageForm;