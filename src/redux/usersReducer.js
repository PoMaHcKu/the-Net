// const ADD_USER = 'ADD_USER';
// const UPDATE_USER = 'UPDATE_USER';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let defaultState = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1
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
                                isFriend: true,
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
                                isFriend: false,
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
            }
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...action.users
                ]
            };
        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
};
export const unFollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
};
export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
};
export const setTotalUserCountActionCreator = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: totalCount
    }
};

export default usersReducer;