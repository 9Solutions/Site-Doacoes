import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Pagamento from "./pages/pagamento/pagamento";
import Home from "./pages/home/home";
import Acompanhamento from "./pages/acompanhamento/acompanhamento";
import ItensCaixa from "./pages/itens-caixa/ItensCaixa";
import FluxoMontagemCaixa from "./pages/fluxoMontagemCaixa/FluxoMontagemCaixa";
import MenuCaixa from "./pages/menuCaixa/MenuCaixa";
import Cartinha from "./pages/cartinha/cartinha";
import FormasDoacao from "./pages/home/formasDoacao/formasDoacao";

import Sobre from "./pages/home/sobre/sobre";
import Carrinho from "./pages/carrinho/Carrinho";
import Erro404 from "./pages/erro404/erro404";
import Erro400 from "./pages/erro400/erro400";
import SejaUmAnjo from "./pages/home/sejaUmAnjo/sejaUmAnjo";

const rotas = () => {
    return(
        <BrowserRouter>
             <Routes>
                 <Route path="/login" element={<Login/>} exact />
                 <Route path="/cadastro" element={<Cadastro/>} exact />
                 <Route path="/pagamento" element={<Pagamento/>} exact />
                 <Route path="/montagem-caixa" element={<FluxoMontagemCaixa/>} exact />
                 <Route path="/acompanhamento" element={<Acompanhamento/>} exact />
                 <Route path="/menu-caixa" element={<MenuCaixa/>} exact />
                 <Route path="/itens-caixa" element={<ItensCaixa/>} exact />
                 <Route path="/sobre-nos" element={<Sobre/>} exact />
                 <Route path="/carrinho" element={<Carrinho/>} exact />
                 <Route path="/seja-um-anjo" element={<SejaUmAnjo/>} exact /> 
                 <Route path="*" element={<Erro404/>} exact />
                 <Route path="/erro400" element={<Erro400/>} exact />
                 <Route path="" element={<Home/>} exact />
                 <Route path="/formas-doacao" element={<FormasDoacao/>} exact />
                 {/*<Route path="*" element={<NotFound />} />*/}
             </Routes>
        </BrowserRouter>
    )
 }
 
 export default rotas;