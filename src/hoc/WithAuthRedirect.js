import * as React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => ({
    isAuth: state.authState.isAuth,
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"}/>
            }
            return <Component {...this.props}/>
        }
    }

    return compose(
        connect(mapStateToProps)
    )(RedirectComponent);
};