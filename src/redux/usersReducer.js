// const ADD_USER = 'ADD_USER';
// const UPDATE_USER = 'UPDATE_USER';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_LOAD_STATUS = 'CHANGE-LOAD';

let defaultState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isLoad: false
};

let usersReducer = (state = defaultState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {
                                ...user,
                                followed: true,
                            }
                        }
                        return user;
                    }
                )
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                        if (user.id === action.userId) {
                            return {
                                ...user,
                                followed: false,
                            }
                        }
                        return user;
                    }
                )
            };
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                // users: [...state.users],
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...action.users
                ]
            };
        case CHANGE_LOAD_STATUS: {
            return {
                ...state,
                isLoad: !state.isLoad
            };
        }
        default:
            return state;
    }
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
};
export const setTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
};
export const changeLoadStatus = () => {
    return {
        type: CHANGE_LOAD_STATUS,
    }
};

export default usersReducer;