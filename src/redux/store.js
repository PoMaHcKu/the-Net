import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thankMiddleWare from "redux-thunk";

let reducers = combineReducers(
    {
        profileState: profileReducer,
        dialogsState: dialogsReducer,
        usersState: usersReducer,
        navbar: navbarReducer,
        authState: authReducer,
        form: formReducer,
    }
);

let store = createStore(reducers, applyMiddleware(thankMiddleWare));

export default store;