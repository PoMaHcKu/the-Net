import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import NewPostForm from "./new-post-form/NewPostForm";

const MyPosts = (props) => {

    let posts = props.posts.map(
        (post) => <Post key={post.id} message={post.message} countLike={post.countLike}/>
    );

    let addNewPost = (form) => {
        props.addPost(form.newPostText);
        form.newPostText = "";
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <NewPostForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {posts.reverse()}
            </div>
        </div>
    );
};

export default MyPosts;