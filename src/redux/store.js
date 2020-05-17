import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers(
    {
        profileState: profileReducer,
        dialogsState: dialogsReducer,
        usersState: usersReducer,
        navbar: navbarReducer,
        authState: authReducer,
    }
);

let store = createStore(reducers);

export default store;