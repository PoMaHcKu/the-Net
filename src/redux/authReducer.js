import {AuthApi} from "../dao/AuthApi";

const SET_USER_DATA = 'SET-USER-DATA';
//const LOGIN = 'LOGIN';


let defaultState = {
    isLoad: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }

};

export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
});

let authDao = new AuthApi();

export const auth = () => {
    return (dispatch) => {
        authDao.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(
                        data.data.id,
                        data.data.email,
                        data.data.login));
                }
            })
    }
};
export const login = (loginData) => {
    return (dispatch) => {
        authDao.login(loginData)
            .then(data => {
                if (data.resultCode === 0) {
                    console.log("OK");
                    dispatch(setAuthUserData(
                        data.data.id,
                        data.data.email,
                        data.data.login));
                } else {
                    alert(data.messages);
                }
            })
    }
}

export default authReducer;