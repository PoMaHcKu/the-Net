import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import React from "react";
import ReactDom from "react-dom";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";


let rerender = (state) => {
    ReactDom.render(
        <BrowserRouter>
            <App state={state}
                 addNewPost={store.addNewPost.bind(store)}
                 newPostTextUpdate={store.newPostTextUpdate.bind(store)}
                 addNewMessage={store.addNewMessage.bind(store)}
                 updateTextCurrentMessage={store.updateTextCurrentMessage.bind(store)}
                 />
        </BrowserRouter>, document.getElementById('root')
    )
};

rerender(store.getState());
store.subscriber(rerender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
