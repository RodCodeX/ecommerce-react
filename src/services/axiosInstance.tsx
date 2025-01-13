import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
})

//?Intanciar y devolver lo que se necesita
export const apiCore = (config: AxiosRequestConfig) => {
    return axiosInstance(config).then((response) => response.data)
}