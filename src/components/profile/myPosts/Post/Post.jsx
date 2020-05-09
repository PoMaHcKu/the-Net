import React from 'react';
import s from './Post.module.css'
import Author from "./author/Author";
import Message from "./message/Message";
import Like from "./like/Like";

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://m.gpspro.lv/images/full/091cf15ec8f9fc5ab5fd6b6996a9b212.jpg" alt="avatar"/>
            <Author name={props.name} age={props.age}/>
            <Message message={props.message}/>
            <Like countLike={props.countLike}/>

        </div>
    );
};

export default Post;