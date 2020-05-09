import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post name="Roman Popov" age="28" message="Hello! How are you?" countLike={15}/>
                <Post name="Dimos" age="35" message="It's my first react!" countLike={"30"}/>

            </div>
        </div>
    );
};

export default MyPosts;