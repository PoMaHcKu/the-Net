import {BaseDao} from "./BaseDao";

export class ProfileApi extends BaseDao {
    getProfile = (userId) => {
        return this.baseConnect
            .get("profile/" + userId)
            .then(response => response.data)
    };
}