import * as serviceWorker from './serviceWorker';
import store from "./redux/store";
import React from "react";
import ReactDom from "react-dom";
import './index.css';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux"

ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
