import {BaseDao} from "./BaseDao";

export class AuthApi extends BaseDao {
    login = () => {
        return this.baseConnect
            .get("auth/me")
            .then(response => response.data);
    }
}