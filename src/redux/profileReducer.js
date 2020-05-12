
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state, action) => {

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