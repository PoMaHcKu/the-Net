import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./info/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};


export default Profile;