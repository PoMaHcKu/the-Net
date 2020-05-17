const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let defaultState = {
    posts: [
        {"message": "Hello! How are you?", "id": 1, "countLike": 11},
        {"message": "It's my first react!", "id": 2, "countLike": 8},
        {"message": "How is your react?", "id": 3, "countLike": 7},
        {"message": "Great jobs!!!", "id": 4, "countLike": 117}
    ],
    newPostText: "",
    profile: null,
};

const profileReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        message: state.newPostText,
                        id: 5,
                        countLike: 0
                    }
                ],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.updateTextNewPost,
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});
export const newPostUpdateText = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateTextNewPost: text,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export default profileReducer;