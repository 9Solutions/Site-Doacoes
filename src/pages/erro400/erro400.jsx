// import api from "../../api";
import React from "react";
import styles from "./erro400.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import erro400img from "../../utils/img/400.png"

// const validar = async (email, senha) => {
//   if (email.length === 0 || senha.length === 0) return;
//   return api.post(`/doadores/login`, { email: email, senha: senha });
// };

const Erro400 = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className={styles["div-erro"]}>
        <img src={erro400img} alt="" />
        <h1 className={styles["bad-request"]}>Bad Request</h1>
        <button className={styles["return-button"]} onClick={toHome}>
          Voltar ao início
        </button>
      </div>

      <Footer styles />
    </>
  );
};

export default Erro400;
