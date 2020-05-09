import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img
                    src="https://www.wallpaperflare.com/static/459/594/357/ultra-wide-photography-space-art-space-wallpaper.jpg"
                    alt="background"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;