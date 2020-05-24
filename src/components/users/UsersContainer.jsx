import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, getUsersThunk, setCurrentPage, unfollow} from "../../redux/usersReducer";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    };

    choosePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
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
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       isWaitingFollowing={this.props.isWaitingFollowing}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
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
        isWaitingFollowing: state.usersState.isWaitingFollowing,
    }
};

let mapDispatchToProps = {
    setCurrentPage,
    getUsersThunk,
    follow,
    unfollow
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

