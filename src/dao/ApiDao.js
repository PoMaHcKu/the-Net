import * as axios from "axios";

const samuraiApi = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "502f064f-d6aa-46a0-8c5f-855fa9475114"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

export const getUsers = (currentPage = 1, pageSize = 5) => {
    return axios
        .get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
        .then(response => response.data)

};