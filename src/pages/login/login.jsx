import React, { useRef } from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";
import { toast } from "react-toastify";
import {login} from "../../utils/backend/methods";


const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const senhaRef = useRef(null);

  const handleLogin = async () => {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    login(email, senha)
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Email ou Senha Inválidos!");
          return;
        }

        sessionStorage.setItem("auth", JSON.stringify(response.data));

        window.location.href = "/menu-caixa";
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
        <input type="text" placeholder="exemplo@email.com" ref={emailRef} />
        <label className={styles["label-login"]} htmlFor="Senha">
          Senha:
        </label>
        <input type="password" placeholder="****************" ref={senhaRef} />
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
