import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.auth();
    }

    render() {
        return (
            <Header {...this.props}/>);
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth,
    myLogin: state.authState.login
});

let mapDispatchToProps = {
    auth
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);