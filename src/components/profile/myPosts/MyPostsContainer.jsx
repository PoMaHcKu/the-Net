import {addPostActionCreator, newPostUpdateTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profileState.posts,
        newPostText: state.profileState.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextNewPost: (text) => {
            let action = newPostUpdateTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;