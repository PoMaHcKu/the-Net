import React from "react";
import {Field, reduxForm} from "redux-form";

let LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name={"email"} placeholder={"email"} component={"input"}/>
                </div>
                <div>
                    <Field name={"password"} placeholder={"password"} component={"input"}/>
                </div>
                <div>
                    <Field name={"rememberMe"} type={"checkbox"} component={"input"}/> remember me
                </div>
                <div>
                    <button>Sign in</button>
                </div>
            </form>
    )
};

LoginForm = reduxForm({
    form: "loginForm"
})(LoginForm);

export default LoginForm;