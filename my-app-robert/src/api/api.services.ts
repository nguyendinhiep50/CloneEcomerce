import axios from "axios";
import { RobertApi } from "./robert.api";
import { readToken } from "@services/localStorage.service";

axios.defaults.headers.common = {
    Authorization: `Bearer ${readToken()}`,
};

const RobertApi = new RobertApi(process.env.REACT_APP_API_BASE_URL);

const apiServices = {
    RobertApi
}

export default apiServices;

export const axiosSetAccessTokenMiddleware = () => {
    axios.defaults.headers.common = {
        Authorization: `Bearer ${readToken()}`,
    };
    apiServices.RobertApi = new RobertApi(process.env.REACT_APP_API_BASE_URL);
}