import axios from "axios";

export const api = axios.create({
  baseURL: "https://explorer-api-movies.onrender.com",
});
