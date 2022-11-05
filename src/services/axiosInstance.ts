import axios from "axios";
import { BASE_URL, TIMEOUT } from "../constants";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})