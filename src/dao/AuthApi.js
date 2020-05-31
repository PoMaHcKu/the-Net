import {BaseDao} from "./BaseDao";

export class AuthApi extends BaseDao {
    auth = () => {
        return this.baseConnect
            .get("auth/me")
            .then(response => response.data);
    }

    login = (loginData) => {
        return this.baseConnect
            .post("auth/login", loginData)
            .then(response => response.data);
    }

    logout = () => {
        return this.baseConnect
            .delete("auth/login")
            .then(response => response.data)
    }
}