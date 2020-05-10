import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

export let rerender = (state, functions) => {
    ReactDOM.render(
        <App
            state={state}
            functions = {functions}/>,
        document.getElementById('root')
    );
};