import React from 'react';
import s from '../ProfileInfo.module.css';


const Contacts = (props) => {
    return (
        <div className={s.contacts}>
            <span>Contacts</span>
            <p className={s.contact}><a href={props.contacts.website} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.website === null ? null : "MySite"}</a></p>
            <p className={s.contact}><a href={props.contacts.vk} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.vk === null ? null : "VK"}</a></p>
            <p className={s.contact}><a href={props.contacts.twitter} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.twitter === null ? null : "Twitter"}</a></p>
            <p className={s.contact}><a href={props.contacts.instagram} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.instagram === null ? null : "Instagram"}</a></p>
            <p className={s.contact}><a href={props.contacts.youtube} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.youtube === null ? null : "YouTube"}</a></p>
            <p className={s.contact}><a href={props.contacts.github} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.github === null ? null : "Git"}</a></p>
            <p className={s.contact}><a href={props.contacts.mainLink} rel={"noopener noreferrer"} target={"_blank"}>{props.contacts.mainLink === null ? null : "Main Link"}</a></p>
        </div>
    );
};

export default Contacts;