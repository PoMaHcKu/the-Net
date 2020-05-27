import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo.js";
import MyPostsContainer from "./myPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer store={props.store}
            />
        </div>
    );
};

export default Profile;