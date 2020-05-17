import React from 'react';
import s from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <div className={s.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profileState.profile
});

let mapDispatchToProps = {
    setUserProfile,
};


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);