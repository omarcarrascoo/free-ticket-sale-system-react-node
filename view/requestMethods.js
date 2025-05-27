import axios from "axios";

const BASE_URL = "http://134.199.238.36:7722/api/"; //http://134.199.238.36:7722/api/

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
const localStorageValue = localStorage.getItem("persist:root");
const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
const user = parsedValue.user || "";
const currentUser = user ? JSON.parse(user).currentUser : {};
const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';


// const TOKEN = localStorageValue ;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
