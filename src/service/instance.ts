import axios from "axios";
import { BASE_URL } from "./url";
import { API_KEY, token } from "../utils/constants";

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.headers = {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
};

Client.interceptors.request.use(
    function (config) {
        config.params ={
            api_key: API_KEY,
            language: "en-US",
            page: 1,
            ...config.params
        }
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default Client;