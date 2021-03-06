import {UserApi} from "../dao/UserApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const CHANGE_LOAD_STATUS = 'CHANGE-LOAD';
const TOGGLE_WAITING_FOLLOWING_STATUS = 'TOGGLE-WAITING-FOLLOWING-STATUS';

let defaultState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isLoad: false,
    isWaitingFollowing: []
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
        case TOGGLE_WAITING_FOLLOWING_STATUS:
            return {
                ...state,
                isWaitingFollowing:
                    action.isProgress
                        ? [...state.isWaitingFollowing, action.userId]
                        : [...state.isWaitingFollowing.filter(id => (id !== action.userId))]
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unfollowSuccess = (userId) => {
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
export const toggleWaitingFollowing = (isProgress, userId) => {
    return {
        type: TOGGLE_WAITING_FOLLOWING_STATUS,
        isProgress,
        userId
    }
};

let userDao = new UserApi();

export const getUsersThunk = (currentPage = 1, pageSize = 5) => {

    return (dispatch) => {
        dispatch(changeLoadStatus());
        userDao
            .getUsers(currentPage, pageSize)
            //
            .then(data => {
                dispatch(changeLoadStatus());
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            })
    }
};
export const follow = (userId) => {

    return (dispatch) => {
        dispatch(toggleWaitingFollowing(true, userId));
        userDao.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleWaitingFollowing(false, userId));
            })
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleWaitingFollowing(true, userId));
        userDao.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleWaitingFollowing(false, userId));
            })
    }
};

export default usersReducer;