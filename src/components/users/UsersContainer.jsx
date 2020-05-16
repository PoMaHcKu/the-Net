import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {
    changeLoadActionCreator,
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUserCountActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.changeLoadStatus();
        this.getUsers();
    }

    getUsers = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.changeLoadStatus();
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    };

    choosePage = (pageNumber) => {
        this.props.changeLoadStatus();
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.changeLoadStatus();
                    this.props.setUsers(response.data.items);
                }
            );

    };

    render = () => {
        return (
            <div>
                {
                    this.props.isLoad ?
                        <Preloader/>
                        : null
                }
                <Users choosePage={this.choosePage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}/>
            </div>
        );

    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        pageSize: state.usersState.pageSize,
        totalCount: state.usersState.totalCount,
        currentPage: state.usersState.currentPage,
        isLoad: state.usersState.isLoad,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (numberPage) => {
            dispatch(setCurrentPageActionCreator(numberPage));
        },
        setTotalUserCount: (totalCount) => {
            dispatch(setTotalUserCountActionCreator(totalCount));
        },
        changeLoadStatus: () => {
            dispatch(changeLoadActionCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

