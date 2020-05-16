import React from 'react';
import s from './Users.module.css'
import uPhoto from '../../pictures/user.jpg';

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
                        <span onClick={() => props.choosePage(page)}>
                            <span> </span>
                            <span className={page === props.currentPage && s.selectedPage}>{page}</span>
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
                                <img src={user.photos.small != null ? user.photos.small : uPhoto} alt={"123"}
                                     className={s.userPhoto}/>
                            <div>
                            </div>
                                {user.isFriend ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>}
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