import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
import FluxoMontagemCaixa from "./pages/fluxoMontagemCaixa/FluxoMontagemCaixa";
import MenuCaixa from "./pages/menuCaixa/MenuCaixa";

const rotas = () => {
    return(
        <BrowserRouter>
             <Routes>
                 <Route path={"/login"} element={<Login/>} exact />
                 <Route path={"/cadastro"} element={<Cadastro/>} exact />
                 <Route path={"/menu-caixa"} element={<MenuCaixa/>} exact />
                 <Route path={"/fluxo-montagem-caixa"} element={<FluxoMontagemCaixa/>} exact />
                 {/*<Route path="*" element={<NotFound />} />*/}
             </Routes>
        </BrowserRouter>
    )
 }
 
 export default rotas;