import React from 'react';
import s from './Users.module.css'
import uPhoto from '../../pictures/user.jpg';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (
        let i = props.currentPage > 1 ? props.currentPage - 1 : props.currentPage;
        i <= (props.currentPage <= pagesCount - 2 ? props.currentPage + 2 : props.currentPage);
        i++
    ) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(page =>
                        <span onClick={() => props.choosePage(page)} key={page}>
                            <span> </span>
                            <span className={page === props.currentPage ? s.selectedPage : undefined}>{page}</span>
                            <span> </span>
                        </span>
                    )
                }
                {
                    props.currentPage < pagesCount - 2 ? (
                        <span onClick={() => props.choosePage(pagesCount)}>
                        <span>...</span>
                            <span>{pagesCount}</span>
                        </span>
                    ) : null
                }
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : uPhoto} alt={"123"}
                                         className={s.userPhoto}/>
                                </NavLink>
                            <div>
                            </div>
                                {user.followed ?
                                    <button onClick={() => {
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                {withCredentials: true,
                                                headers: {
                                                    "API-KEY": "502f064f-d6aa-46a0-8c5f-855fa9475114"
                                                }})
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id);
                                                }
                                            })}

                                    }>Unfollow</button> :
                                    <button onClick={() => {
                                            axios
                                                .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                    {},
                                                    {withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "502f064f-d6aa-46a0-8c5f-855fa9475114"
                                                    }})
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(user.id);
                                                    }
                                                })}
                                    }>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{/*user.location.city*/}</div><div>{/*user.location.count*/}</div>
                            </span>
                        </span>
                    </div>
                )
            }
        </div>
    );
};

export default Users;