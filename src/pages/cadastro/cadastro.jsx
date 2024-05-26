import React from "react";
import styles from "./cadastro.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import instagramIcon from "../../utils/img/Instagram-Icon.png";
import facebookIcon from "../../utils/img/Facebook-Icon.png";

const Cadastro = () => {
  return (
    <>
      <NavBar />
      <h2>Cadastro</h2>
      <div className={styles["div-cadastro"]}>
        <h3>Informações Pessoais</h3>
        <label htmlFor="nome">Nome:</label>
        <input type="text" />
        <label htmlFor="Senha">CPF:</label>
        <input type="password" />

        <h3>Informações de conta</h3>
        <label htmlFor="email">E-mail:</label>
        <input type="text" />
        <label htmlFor="repetir-email">Repetir E-mail:</label>
        <input type="text" />
        <label htmlFor="senha">Senha:</label>
        <input type="text" />
        <label htmlFor="repetir-senha">Repetir a senha:</label>
        <input type="text" />

        <h3>Informações adicionais</h3>
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" />
        <label htmlFor="detail">Como conheceu o projeto:</label>
        <input type="text" />
        <label htmlFor="person-type">Tipo de pessoa:</label>
        <input type="text" />

        <button>
          <img src={instagramIcon} alt="" />
          Entrar com Instagram
        </button>
        <button>
          <img src={facebookIcon} alt="" />
          Entrar com Facebook
        </button>
        <button>Cadastrar</button>
        <p>
          <a href="">Não possui uma conta?</a>
          <a class="link" href="">
            Crie aqui
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Cadastro;