import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader"

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
                    <p className={s.status}>{props.profile.aboutMe}</p>

                    <div className={s.contacts}>
                        <span>Contacts</span>
                            <p className={s.contact}><a href={props.profile.contacts.website} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.website === null ? null : "MySite"}</a></p>
                            <p className={s.contact}><a href={props.profile.contacts.vk} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.vk === null ? null : "VK"}</a></p>
                            <p className={s.contact}><a href={props.profile.contacts.twitter} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.twitter === null ? null : "Twitter"}</a></p>
                            <p className={s.contact}><a href={"https://" + props.profile.contacts.instagram} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.instagram === null ? null : "Instagram"}</a></p>
                            <p className={s.contact}><a href={props.profile.contacts.youtube} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.youtube === null ? null : "YouTube"}</a></p>
                            <p className={s.contact}><a href={props.profile.contacts.github} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.github === null ? null : "Git"}</a></p>
                            <p className={s.contact}><a href={props.profile.contacts.mainLink} rel={"noopener noreferrer"} target={"_blank"}>{props.profile.contacts.mainLink === null ? null : "Main Link"}</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;