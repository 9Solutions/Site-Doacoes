import api from "../../api";
import React, { useEffect, useRef } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";
import { toast } from "react-toastify";

const validar = async (email, senha) => {
  if (email.length === 0 || senha.length === 0) return;
  return api.post(`/doadores/login`, { email: email, senha: senha });
};

const Login = () => {
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

  const toCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <NavBar />
      <h2 className={styles["titulo-login"]}>Login</h2>
      <div className={styles["div-login"]}>
        <label className={styles["label-login"]} htmlFor="identificador">
          E-mail/CPF
        </label>
        <input
          type="text"
          placeholder="exemplo@email.com"
          ref={emailRef}
        />
        <label className={styles["label-login"]} htmlFor="Senha">
          Senha:
        </label>
        <input
          type="password"
          placeholder="****************"
          ref={senhaRef}
        />
        <p>
          <a id={styles["forgot-password"]}>
            Esqueci minha senha  
          </a>
          <a href="">Não possui uma conta?</a>
          <a className={styles["link"]} onClick={toCadastro}>Crie aqui</a>
        </p>
        <button className={styles["login-button"]}>
          <img src={instagramIcon} alt="" />
          Entrar com Instagram
        </button>
        <button className={styles["login-button"]}>
          <img src={facebookIcon} alt="" />
          Entrar com Facebook
        </button>
        <button className={styles["login-button"]} onClick={handleLogin}>
          Fazer login
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Login;
