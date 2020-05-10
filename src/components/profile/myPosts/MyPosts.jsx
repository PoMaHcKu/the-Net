import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(
      (post) => <Post message={post.message} countLike={post.countLike}/>
    );

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea rows="4" maxLength="500" cols={60} placeholder={"What's new?"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};

export default MyPosts;