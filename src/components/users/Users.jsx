import React from 'react';
import s from './Users.module.css'
import * as axios from "axios";
import uPhoto from '../../pictures/user.jpg';

class Users extends React.Component {

    componentDidMount() {
        this.getUsers();
    }

    render = () => {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (
            let i = this.props.currentPage > 1 ? this.props.currentPage - 1 : this.props.currentPage;
            i <= (this.props.currentPage <= pagesCount -2 ? this.props.currentPage + 2: this.props.currentPage);
            i++
        ) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(page =>
                        <span onClick={() => this.choosePage(page)}>
                            <span> </span>
                            <span className={page === this.props.currentPage && s.selectedPage}>{page}</span>
                            <span> </span>
                        </span>
                    )}
                    {this.props.currentPage < pagesCount - 2 ?
                    <span onClick={() => this.choosePage(pagesCount)}>
                        <span>...</span>
                        {pagesCount}
                    </span> : null }
                </div>
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
    };

    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            }
        );
    };

    choosePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            }
        );
    }
}

export default Users;