import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        let status = {
            text: this.props.status,
            getStatus: this.props.getUserStatus,
            updateStatus: this.props.updateUserStatus
        }

        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}
                         status={status}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
    status: state.profileState.status,
});
const mapDispatchToProps = {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
