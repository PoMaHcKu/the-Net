// const LOGIN = 'LOGIN';
// const LOGOUT = 'LOGOUT';
import {loginRequest} from "../dao/ApiDao";

const SET_USER_DATA = 'LOGOUT';


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

export const login = () => {
  return (dispatch) => {
      loginRequest()
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

export default authReducer;