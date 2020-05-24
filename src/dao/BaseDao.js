import * as axios from "axios";

export class BaseDao {

    baseConnect;

    constructor() {
        this.baseConnect = axios.create({
            withCredentials: true,
            headers: {
                "API-KEY": "502f064f-d6aa-46a0-8c5f-855fa9475114"
            },
            baseURL: "https://social-network.samuraijs.com/api/1.0/"
        });
    }
}