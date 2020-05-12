import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(
        (post) => <Post message={post.message} countLike={post.countLike}/>
    );

    let updateTextNewPost = (e) => {
        let newTextPost = e.target.value;
        props.updateTextNewPost(newTextPost);
    };

    let addPost = () => props.addPost();

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={updateTextNewPost}
                          rows="4"
                          maxLength="500"
                          cols={60}
                          placeholder={"What's new?"}
                          value={props.newPostText}/>
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