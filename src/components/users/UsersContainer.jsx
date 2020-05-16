import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreator} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
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
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

