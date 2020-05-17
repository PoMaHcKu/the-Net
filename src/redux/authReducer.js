const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER_DATA = 'LOGOUT';


let defaultState = {
    isLoad: false,
    userId: null,
    email: null,
    login: null,
};

const authReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        case LOGOUT:
            return {

            };
        default:
            return state;
    }

};

const setUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
});

export default authReducer;