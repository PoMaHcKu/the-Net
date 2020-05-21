import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {login} from "../../dao/ApiDao";

class HeaderContainer extends React.Component {

    componentDidMount() {
        login()
            .then(data => {
                    if (data.resultCode === 0) {
                        this.props.setAuthUserData(
                            data.data.id,
                            data.data.email,
                            data.data.login);
                    }
                }
            );
    }

    render() {
        return (
            <Header {...this.props}/>);
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth,
    login: state.authState.login
});

let mapDispatchToProps = {
    setAuthUserData
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);