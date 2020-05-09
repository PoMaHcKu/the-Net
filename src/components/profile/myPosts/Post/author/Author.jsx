import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://m.gpspro.lv/images/full/091cf15ec8f9fc5ab5fd6b6996a9b212.jpg" alt="avatar"/>
            <div className={s.author}>
                <span>{props.name}, {props.age}</span><br/>
            </div>
            <div className={s.message}>
                {props.message}
            </div>
            <div className={s.like}>
                <img
                    src="https://c7.hotpng.com/preview/337/920/1012/red-curry-heart-clip-art-heart-no-background.jpg"
                    alt="like"/>{ props.countLike}
            </div>


        </div>
    );
};

export default Post;