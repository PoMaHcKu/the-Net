import React from 'react';
import s from './Post.module.css'
import Message from "./message/Message";
import Like from "./like/Like";

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.ava}>
                <img src="https://m.gpspro.lv/images/full/091cf15ec8f9fc5ab5fd6b6996a9b212.jpg" alt="avatar"/>
            </div>
            <Message message={props.message}/>
            <Like countLike={props.countLike}/>
        </div>
    );
};

export default Post;