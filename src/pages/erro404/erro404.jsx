// import api from "../../api";
import React from "react";
import styles from "./erro404.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import erro404img from "../../utils/img/erro404.png"

const Erro404 = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div className={styles["div-erro-404"]}>
        <img src={erro404img} alt="" />
        <h1 className={styles["Not-found"]}>Essa página não foi encontrada</h1>
      <button className={styles["return-button"]} onClick={toHome}>
          Voltar ao início 
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Erro404;
