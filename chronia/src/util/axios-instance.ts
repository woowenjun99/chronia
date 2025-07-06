import axios, { type AxiosError, type AxiosResponse } from "axios";
import { env } from "./env";

export interface BaseResponse<T> extends AxiosResponse {
  data: {
    data: T;
    message: string;
    success: boolean;
  };
}

const axiosInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => Promise.resolve(err.response)
);

export { axiosInstance };
