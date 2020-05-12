import React from 'react'
import s from './Friends.module.css'
import Friend from "./friend/Friend";


let Friends = (props) => {

    let friends = props.friends.map(
        friend => <Friend
            key={friend.id}
            avatar={friend.avatar}
            firstName={friend.firstName}
            lastName={friend.lastName}
        />
    );

    return (
        <div className={s.friends}>
            <div className={s.header}>FRIENDS</div>
            {friends}
        </div>
    );
};

export default Friends;