import axios from "axios";

const api = axios.create()

export const postDoador = (payload) => {
    return api.post('/java-api/doadores', payload)
}

export default api;