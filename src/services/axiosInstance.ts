import axios, { AxiosInstance } from "axios";
import { TIMEOUT } from "../constants/api";

export const axiosInstance = (baseUrl: string): AxiosInstance => {
    return axios.create({
        baseURL: baseUrl,
        timeout: TIMEOUT
    })
}