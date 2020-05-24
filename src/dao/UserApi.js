import {BaseDao} from "./BaseDao";

export class UserApi extends BaseDao {
    getUsers = (currentPage = 1, pageSize = 5) => {
        return this.baseConnect
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    };

    follow = (userId) => {
        return this.baseConnect
            .post(`follow/${userId}`, {})
            .then(response => response.data);
    };

    unfollow = (userId) => {
        return this.baseConnect
            .delete(`follow/${userId}`)
            .then(response => response.data);
    };


}