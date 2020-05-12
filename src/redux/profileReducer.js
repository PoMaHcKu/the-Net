const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let defaultState = {
    posts: [
        {"message": "Hello! How are you?", "id": 1, "countLike": 11},
        {"message": "It's my first react!", "id": 2, "countLike": 8},
        {"message": "How is your react?", "id": 3, "countLike": 7},
        {"message": "Great jobs!!!", "id": 4, "countLike": 117}
    ],
    newPostText: "",
    profileReducer
};

const profileReducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                id: 5,
                countLike: 0
            };
            if (newPost.message === '') {
                return;
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.updateTextNewPost;
            return state;
        default:
            return state;
    }
};


export const addPostActionCreator = () => ({type: ADD_POST});

export const newPostUpdateTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    updateTextNewPost: text,
});

export default profileReducer;