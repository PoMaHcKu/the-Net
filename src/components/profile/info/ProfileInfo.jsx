import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.profileImage}>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4E1BAQGnh_tKiWytWg/company-background_10000/0?e=2159024400&v=beta&t=8Jxd1rbTcSiLdrT6mGdiasdQD2RAz-Ohfi3SXwQPfwQ"
                    alt="background"/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;