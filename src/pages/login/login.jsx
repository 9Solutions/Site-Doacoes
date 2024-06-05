import React from "react";
import styles from "./login.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";

const Login = () => {
  return (
    <>
      <NavBar />
      <h2>Login</h2>
      <div className={styles["div-login"]}>
        <label htmlFor="identificador">E-mail/CPF</label>
        <input type="text" placeholder="exemplo@email.com" />
        <label htmlFor="Senha">Senha:</label>
        <input type="password" placeholder="****************" />
        <p>
          <a id={styles["forgot-password"]} href="">
            Esqueci minha senha
          </a>
          <a href="">Não possui uma conta?</a>
          <a className={styles["link"]} href="">
            Crie aqui
          </a>
        </p>
        <button className={styles["login-button"]}>
          <img src={instagramIcon} alt="" />
          Entrar com Instagram
        </button>
        <button className={styles["login-button"]}>
          <img src={facebookIcon} alt="" />
          Entrar com Facebook
        </button>
        <button className={styles["login-button"]}>Fazer login</button>
      </div>
      <Footer />
    </>
  );
};

export default Login;