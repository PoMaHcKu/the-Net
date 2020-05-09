import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://media-exp1.licdn.com/dms/image/C4E1BAQGnh_tKiWytWg/company-background_10000/0?e=2159024400&v=beta&t=8Jxd1rbTcSiLdrT6mGdiasdQD2RAz-Ohfi3SXwQPfwQ'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;