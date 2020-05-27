import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader"
import Contacts from "./contacts/Contacts";
import Status from "./status/Status"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.profileImage}>
                <img
                    src="https://www.wallpaperflare.com/static/459/594/357/ultra-wide-photography-space-art-space-wallpaper.jpg"
                    alt="background"/>
            </div>
            <div className={s.description}>
                <div className={s.largeAva}>
                    <img src={props.profile.photos.large} alt={"large avatar"}/>
                </div>
                <div className={s.aboutMe}>
                    <p className={s.fullName}>{props.profile.fullName}</p>
                    {/*<p className={s.status}>{props.profile.aboutMe}</p>*/}
                    <Status status={props.status}/>
                    <Contacts contacts={props.profile.contacts}/>

                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;