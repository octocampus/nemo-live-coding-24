import axios, {InternalAxiosRequestConfig} from "axios";
import qs from "qs";
import {REACT_APP_API_URL, REACT_APP_API_KEY} from "config";

export const ClientApi = axios.create({
    baseURL: REACT_APP_API_URL,
});

ClientApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const contentType = config.headers.get("Content-Type");
    config.headers.set("Accept", contentType || "application/json");
    config.headers.set("Content-Type", contentType || "application/json");
    config.headers.set("Authorization", `Bearer ${REACT_APP_API_KEY}`);
    config.headers.set("apikey", REACT_APP_API_KEY)

    return {
        ...config,
        paramsSerializer: {
            serialize: (p: object) => qs.stringify(p, {arrayFormat: "repeat"}),
        },
    };
});

ClientApi.interceptors.response.use((response) => {
    if (response.data) return response.data;
    return response;
});
