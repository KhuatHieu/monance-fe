import { ENV } from "@/env";
import axios from "axios";

const token = window.localStorage.getItem("token");

const headers: { [key: string]: string } = {};

if (token) {
  headers.Authorization = `Bearer ${token}`;
}

const axiosInstance = axios.create({
  baseURL: ENV.BASE_API_URL,
  headers: headers,
});

export default axiosInstance;
