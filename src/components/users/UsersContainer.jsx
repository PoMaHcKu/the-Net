import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    changeLoadStatus,
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";
import {getUsers} from "../../dao/ApiDao";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.changeLoadStatus();
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.changeLoadStatus();
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            })
    };

    choosePage = (pageNumber) => {
        this.props.changeLoadStatus();
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.changeLoadStatus();
                    this.props.setUsers(data.items);
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

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    changeLoadStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

