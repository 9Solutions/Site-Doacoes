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


const Erro404 = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const senhaRef = useRef(null);


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
