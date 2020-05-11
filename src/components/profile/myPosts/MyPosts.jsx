import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, newPostUpdateTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let posts = props.profileState.posts.map(
        (post) => <Post message={post.message} countLike={post.countLike} delete={props.functions}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatcher(addPostActionCreator());
    };

    let newPostUpdateText = () => {
        props.dispatcher(newPostUpdateTextActionCreator(newPostElement.current.value));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={newPostUpdateText}
                          ref={newPostElement}
                          rows="4"
                          maxLength="500"
                          cols={60}
                          placeholder={"What's new?"}
                          value={props.profileState.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts.reverse()}
            </div>
        </div>
    );
};

export default MyPosts;