import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    profile: state.profileState.profile,
});
const mapDispatchToProps = {
    setUserProfile,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
