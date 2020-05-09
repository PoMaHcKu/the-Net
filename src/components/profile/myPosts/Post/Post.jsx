import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            <textarea>What's new?</textarea>
            <button>Add</button>
            <div className={s.posts}>

                <div className={s.item}>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default MyPosts;