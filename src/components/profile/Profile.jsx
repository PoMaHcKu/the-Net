import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import s from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                profileState={props.profilePage}
                updateTextNewPost={props.updateTextNewPost}
                addNewPost={props.addNewPost}/>
        </div>
    );
};


export default Profile;