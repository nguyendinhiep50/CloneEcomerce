import axios from "axios";
import { RobertApi } from "./rb.api";
import { readToken } from "@services/localStorage.service";

axios.defaults.headers.common = {
    Authorization: `Bearer ${readToken()}`,
};

const RbApi = new RobertApi("https://localhost:7173");

const apiServices = {
    RbApi
}

export default apiServices;

export const axiosSetAccessTokenMiddleware = () => {
    axios.defaults.headers.common = {
        Authorization: `Bearer ${readToken()}`,
    };
    apiServices.RbApi = new RobertApi("https://localhost:7173");
}