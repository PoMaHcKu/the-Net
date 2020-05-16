import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import uPhoto from '../../pictures/user.jpg';

class Users extends React.Component{

    constructor(props) {
        super(props);
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items);
            }
        );
    };

    render =() => {
        return (
            <div>
                {
                    this.props.users.map(user =>
                        <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : uPhoto} alt={"123"}
                                     className={s.userPhoto}/>
                            <div>
                            </div>
                                {user.isFriend ?
                                    <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
    }
}

export default Users;