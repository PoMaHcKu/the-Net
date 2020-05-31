import React from "react";
import {AuthApi} from "../../../dao/AuthApi";

const Logout = () => {
    let auth = new AuthApi();

    const logout =() => {
        auth.logout().then(data => console.log(data));
    }

    return <button onClick={logout}>Sign out</button>;
}

export default Logout;