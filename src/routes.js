import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import Home from "./pages/home/home";

import Acompanhamento from "./pages/acompanhamento/acompanhamento";
import ItensCaixa from "./pages/itens-caixa/ItensCaixa";
import FluxoMontagemCaixa from "./pages/fluxoMontagemCaixa/FluxoMontagemCaixa";
import MenuCaixa from "./pages/menuCaixa/MenuCaixa";
import Cartinha from "./pages/cartinha/cartinha";


const rotas = () => {
    return(
        <BrowserRouter>
             <Routes>
                 <Route path="/login" element={<Login/>} exact />
                 <Route path="/cadastro" element={<Cadastro/>} exact />
                 <Route path="/montagem-caixa" element={<FluxoMontagemCaixa/>} exact />
                 <Route path="/acompanhamento" element={<Acompanhamento/>} exact />
                 <Route path="/menu-caixa" element={<MenuCaixa/>} exact />
                 <Route path="/itens-caixa" element={<ItensCaixa/>} exact />
                 <Route path="" element={<Home/>} exact />
                 {/*<Route path="*" element={<NotFound />} />*/}
             </Routes>
        </BrowserRouter>
    )
 }
 
 export default rotas;