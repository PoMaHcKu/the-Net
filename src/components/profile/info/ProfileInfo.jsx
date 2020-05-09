import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.profile}>

            <ProfileInfo/>
            <div>
                My posts
                <div>
                    New post
                </div>
                <MyPosts/>
            </div>
        </div>
    );
};


export default Profile;