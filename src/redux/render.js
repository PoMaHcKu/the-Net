import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

export let rerender = (state, addNewPost, updateTextNewPost) => {
    ReactDOM.render(
        <App
            state={state}
            addNewPost = {addNewPost}
            updateTextNewPost={updateTextNewPost}/>,
        document.getElementById('root')
    );
};