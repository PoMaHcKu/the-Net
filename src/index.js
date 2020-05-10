import * as serviceWorker from './serviceWorker';
import {rerender} from "./redux/render";
import state, {addNewPost} from "./redux/state";

rerender(state, addNewPost);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
