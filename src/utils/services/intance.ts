import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://rickandmortyapi.com/api`
      : `https://rickandmortyapi.com/api`,
});

export default instance;
