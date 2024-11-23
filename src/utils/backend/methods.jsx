import axios from "axios";

const { token } = JSON.parse(sessionStorage.getItem("auth")) || {};
const api = axios.create({
    //baseURL: endpoint,
    headers: {
        Authorization: token ? `Bearer ${token}` : ''
    }
});

export const login = async (email, senha) => {
    if(email.length === 0 || senha.length === 0) return;
    return api.post(`/java-api/doadores/login`, {"email": email, "senha": senha});
}

export const logout = () => {
    sessionStorage.removeItem("auth");
    window.location.href = "/";
}

export const getAllDoacoes = async () => {
    return api.get(`/java-api/pedidos`);
}

export const getDoacaoFiltro = async (status, data, idPedido) => {
    return api.get(`/java-api/pedidos/filter`, { params: { status, data, idPedido } });
}

export const getAllDoacoesDetalhadas = async () => {
    return api.get(`/java-api/pedidos/all-details`);
}

export const getCaixasEntregar = async () => {
    return api.get(`/java-api/vw-caixas-para-entregar`);
}

export const getCaixasMontar = async () => {
    return api.get(`/java-api/vw-caixas-em-montagem`);
}

export const getCaixasAtrasadas = async () => {
    return api.get(`/java-api/vw-caixas-atrasadas`);
}

export const getProdutos = async () => {
    return api.get(`/java-api/produtos/?condicao=1`);
}

export const getCategorias = async () => {
    return api.get(`/java-api/categorias/`);
}

export const getCategoriasPorEstagio = async (estagio) => {
    return api.get(`/java-api/categorias/filter?estagio=${estagio}&condicao=1`);
}

export const getFaixasEtarias = async (id) => {
    return api.get(`/java-api/faixa-etaria/${id}`);
}

export const getPedidosByUser = async (idDoador) => {
    return api.get(`/java-api/pedidos/all-details/buscar-doador/${idDoador}`);
}

export const postPedido = async (payload) => {
    console.log('aqui')
    return api.post('/java-api/pedidos', payload)
}

export const postCaixa = async (payload) => {
    return api.post('/java-api/caixas', payload)
}

export const postImage = async (fotoBase64) => {
    return api.post(`/lambda-services/live/upload-image`, fotoBase64);
}
