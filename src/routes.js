import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";

import Login from "./pages/login/login";
import Cadastro from "./pages/cadastro/cadastro";
// import Cartinha from "./pages/cartinha/cartinha";
import ItensCaixa from "./pages/itens-caixa/ItensCaixa";

const rotas = () => {
    return(
        <BrowserRouter>
             <Routes>
                 <Route path="/login" element={<Login/>} exact />
                 <Route path="/cadastro" element={<Cadastro/>} exact />
                 {/* <Route path="/cartinha" element={<Cartinha/>} exact /> */}
                 <Route path="/itens-caixa" element={<ItensCaixa/>} exact />
                 {/*<Route path="*" element={<NotFound />} />*/}
             </Routes>
        </BrowserRouter>
    )
 }
 
 export default rotas;