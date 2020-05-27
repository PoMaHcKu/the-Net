import {BaseDao} from "./BaseDao";

export class ProfileApi extends BaseDao {
    getProfile = (userId) => {
        return this.baseConnect
            .get("profile/" + userId)
            .then(response => response.data);
    };

    getStatus = (userId) => {
        return this.baseConnect
            .get("profile/status/" + userId)
            .then(response => response.data);
    }

    updateStatus = (status) => {
        return this.baseConnect
            .put("profile/status", {status: status})
            .then();
    }
}