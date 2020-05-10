import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

export let rerender = (state, addNewPost, updateTextNewPost, addNewMessage, updateCurrentMessage) => {
    ReactDOM.render(
        <App
            state={state}
            addNewPost = {addNewPost}
            updateTextNewPost={updateTextNewPost}
            addNewMessage={addNewMessage}
            updateCurrentMessage={updateCurrentMessage}
        />,
        document.getElementById('root')
    );
};