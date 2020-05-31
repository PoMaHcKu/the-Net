import React from "react";
import LoginForm from "./login-form/LoginForm";
import Logout from "./logout/Logout";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";

const Login = (props) => {

    const authentication = (formData) => {
        let loginData = {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe
        }
        props.login(loginData);
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginForm onSubmit={authentication}/>
            <Logout/>
        </div>
    )
};

const mapStateToProps = (state) => {}

const mapDispatchToProps = {
    login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);