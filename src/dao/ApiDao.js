import * as axios from "axios";

const samuraiApi = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "502f064f-d6aa-46a0-8c5f-855fa9475114"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const getUsersRequest = (currentPage = 1, pageSize = 5) => {
    return samuraiApi
        .get(`users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
        .then(response => response.data);

};

export const followRequest = (userId) => {
    return samuraiApi
        .post(`follow/${userId}`, {})
        .then(response => response.data);
};

export const unfollowRequest = (userId) => {
    return samuraiApi
        .delete(`follow/${userId}`)
        .then(response => response.data);
};

export const login = () => {
    return samuraiApi
        .get("auth/me")
        .then(response => response.data);
};