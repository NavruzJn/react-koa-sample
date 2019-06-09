import axios from "axios";

export const API = axios.create();
API.defaults.baseURL = "localhost:8080";

