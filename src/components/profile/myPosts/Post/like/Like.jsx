import React from 'react';
import s from './Like.module.css'

const Like = (props) => {
    return (
        <div className={s.like}>
            <img
                src="https://c7.hotpng.com/preview/337/920/1012/red-curry-heart-clip-art-heart-no-background.jpg"
                alt="like"/>
                {props.countLike}
        </div>
    );
};

export default Like;