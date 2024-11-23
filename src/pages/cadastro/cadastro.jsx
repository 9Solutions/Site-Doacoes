import { postDoador } from "../../api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import styles from "./cadastro.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

function Cadastro() {
  const navigate = useNavigate();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [identificador, setIdentificador] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const handleSave = () => {
    // const objetoAdicionado = {
    //   nomeCompleto,
    //   identificador,
    //   email,
    //   telefone,
    //   senha,
    // };

    postDoador( {
      nomeCompleto: nomeCompleto,
      identificador: identificador,
      email: email,
      telefone: telefone,
      senha: senha,
      permissao: 'user'
    })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        if (window.location.search.includes("redirect")) {
            let params = new URLSearchParams(window.location.search);
            const redirect = params.get("redirect");
            window.location.href = `/${redirect}`;
        }

      })
      .catch((error) => {
        console.log(error)
        toast.error(
          "Ocorreu um erro ao salvar os dados, por favor, tente novamente."
        );
      });
  };

  const handleInputChange = (event, setStateFunction) => {
    setStateFunction(event.target.value);
  };

  // const handleBack = () => {
  //   navigate("http://localhost:3000/");
  // };

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <NavBar />
      <h2 className={styles["titulo"]}>Cadastro</h2>
      <div className={styles["div-cadastro"]}>
        <h3 className={styles["titulo-medio"]}>Informações Pessoais</h3>

        <label className={styles["label-cadastro"]} htmlFor="nome">
          Nome:
        </label>
        <input
          className={styles["input-cadastro"]}
          value={nomeCompleto}
          placeholder="Ex. Ana"
          type="text"
          onChange={(e) => handleInputChange(e, setNomeCompleto)}
        />

        <label className={styles["label-cadastro"]} htmlFor="cpf">CPF:</label>
        <input
          className={styles["input-cadastro"]}
          value={identificador}
          placeholder="11122233344"
          type="text"
          onChange={(e) => handleInputChange(e, setIdentificador)}
        />

        <h3>Informações de conta</h3>

        <label className={styles["label-cadastro"]} htmlFor="email">E-mail:</label>
        <input
          className={styles["input-cadastro"]}
          value={email}
          placeholder="ana@email.com"
          type="text"
          onChange={(e) => handleInputChange(e, setEmail)}
        />

        <label className={styles["label-cadastro"]} htmlFor="repetir-email">Repetir E-mail:</label>
        <input className={styles["input-cadastro"]} type="text" placeholder="ana@email.com" />
        <label className={styles["label-cadastro"]} htmlFor="senha">Senha:</label>
        <input
          className={styles["input-cadastro"]}
          value={senha}
          type="password"
          placeholder="********"
          onChange={(e) => handleInputChange(e, setSenha)}
        />

        <label className={styles["label-cadastro"]} htmlFor="repetir-senha">Repetir a senha:</label>
        <input className={styles["input-cadastro"]} type="password" placeholder="********" />

        <h3>Informações adicionais</h3>

        <label className={styles["label-cadastro"]} htmlFor="telefone">Telefone:</label>
        <input
          className={styles["input-cadastro"]}
          value={telefone}
          placeholder="11222223333"
          type="text"
          onChange={(e) => handleInputChange(e, setTelefone)}
        />

        <label className={styles["label-cadastro"]} htmlFor="detail">Como conheceu o projeto:</label>
        <input className={styles["input-cadastro"]} type="text" />

        <label className={styles["label-cadastro"]} htmlFor="person-type">Tipo de pessoa:</label>
        <input className={styles["input-cadastro"]} type="text" />

        <button className={styles["botao-cadastro"]} onClick={handleSave}>
          Cadastrar
        </button>
        <p className={styles["p-cadastro"]}>
          <span>Já possui uma conta? </span>
          {/* eslint-disable-next-line */}
          <a className={`${styles["a-cadastro"]} ${styles["link"]}`} onClick={toLogin} href="javascript:void(0)">
            Entre aqui
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Cadastro;
