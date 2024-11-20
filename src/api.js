import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const api = axios.create()

export const postDoador = (payload) => {
    return api.post('/java-api/doadores', payload)
}

export default api;