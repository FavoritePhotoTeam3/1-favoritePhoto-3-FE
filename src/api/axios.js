import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const USERS = axios.create({
  baseURL: process.env.REACT_APP_URL + "/users",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
