import api from "../../api";
import React, { useEffect, useRef } from "react";
import styles from "./acompanhamento.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import caixa from "../../img/caixa.png"
import { toast } from "react-toastify";
import  imagemInicial from "../../img/inicial.png"
import cicloCaixaEntregue from "../../img/ciclo-caixa.png"

const validar = async (email, senha) => {
  if (email.length === 0 || senha.length === 0) return;
  return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Acompanhamento = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    validar(email, senha)
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Email ou Senha Inválidos!");
          return;
        }

        navigate("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email ou Senha Inválidos!");
      });
  };

  return (
    <>
      <NavBar />
      <h2 className={styles["titulo-acompanhamento"]}>Doações</h2>
      <p className={styles["subtitulo-acompanhamento"]}>Olá, Filipe Portugal <br></br>Acompanhe suas doações por aqui</p>
      <div className={styles["div-login"]}>
        <div className={styles["circulo"]}>
          <img src={caixa} alt="" />
        </div>

        <div className={styles["texto-caixa"]}>
        <label className={styles["label-acompanhamento"]} htmlFor="identificador">
          Detalhes
        </label>
        <label className={styles["label-detalhe-acompanhamento"]} htmlFor="Senha">
          Data Doação:01/04/2024
          <br>
          </br>
          Valor Total:R$ 78.00
          <br>
          </br>
          Data de Entrega: Entregue
        </label>
        <hr></hr>

        <div className={styles["lado-direito-caixa-acompanhamento"]}>
        <label className={styles["label-detalhe-acompanhamento-2"]} htmlFor="identificador">
        Status da Doação
        </label>
          <img src={cicloCaixaEntregue} alt="" />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Acompanhamento;
