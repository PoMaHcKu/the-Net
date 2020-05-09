import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {"message": "Hello! How are you?", "id": 1, "countLike": 11},
        {"message": "It's my first react!", "id": 2, "countLike": 8},
        {"message": "How is your react?", "id": 3, "countLike": 7},
        {"message": "Great jobs!!!", "id": 4, "countLike": 117}
    ];

    let posts = postsData.map(
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