import React from "react";
import {addMessageActionCreator, updateTextNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) => {

    let state = props.store.getState().dialogsState;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let updateTextNewMessage = (text) => {
        let action = updateTextNewMessageActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Dialogs dialogs={state.dialogs}
                 messages={state.messages}
                 newMessageText={state.newMessageText}
                 addMessage={addMessage}
                 updateTextNewMessage={updateTextNewMessage}
        />
    )
};

export default DialogsContainer;