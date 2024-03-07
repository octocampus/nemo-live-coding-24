import {API_BASE_URL} from "./constants";


export const API_ENDPOINTS = {
    getUsers: () => API_BASE_URL + "/users",
    getUser: (userId: string) => API_ENDPOINTS + "/users" + userId,

}