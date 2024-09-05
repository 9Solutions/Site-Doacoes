import api from "../../api";
import React, { useRef } from "react";
import styles from "./erro404.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";
import erro404img from "../../utils/img/erro404.png"


import { toast } from "react-toastify";

const validar = async (email, senha) => {
  if (email.length === 0 || senha.length === 0) return;
  return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Erro404 = () => {
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

        sessionStorage.setItem("auth", JSON.stringify(response.data));

        navigate("/menu-caixa");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Email ou Senha Inválidos!");
      } );
  };

  const toCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <NavBar />
      <div className={styles["div-erro-404"]}>
      <img src={erro404img} alt="" />
      </div>
      <h1 className={styles["Not-found"]}>Essa página não foi encontrada</h1>
      <button className={styles["return-button"]} onClick={handleLogin}>
          Voltar ao início 
        </button>
      <Footer />
    </>
  );
};

export default Erro404;
