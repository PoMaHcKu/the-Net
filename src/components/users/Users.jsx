import React from 'react';
import s from './Users.module.css'
import uPhoto from '../../pictures/user.jpg';
import {NavLink} from "react-router-dom";
import ChooserPage from "./choosePage/ChooserPage";

let Users = (props) => {

    return (
        <div>
            <div>
                <ChooserPage totalCount={props.totalCount}
                             pageSize={props.pageSize}
                             currentPage={props.currentPage}
                             choosePage={props.choosePage}
                />
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
                                    (<button disabled={props.isWaitingFollowing.some(id => id === user.id)}
                                             onClick={() => {
                                                 props.unfollow(user.id);
                                             }

                                             }>Unfollow</button>) :
                                    <button disabled={props.isWaitingFollowing.some(id => id === user.id)}
                                            onClick={() => {
                                                props.follow(user.id);
                                            }
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