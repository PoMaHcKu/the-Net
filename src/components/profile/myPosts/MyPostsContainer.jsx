import React from 'react';
import {addPostActionCreator, newPostUpdateTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let newPostUpdateText = (text) => {
        let action = newPostUpdateTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts posts={state.profileState.posts}
                 newPostText={state.profileState.newPostText}
                 updateTextNewPost={newPostUpdateText}
                 addPost={addPost}
        />
    );
};

export default MyPostsContainer;