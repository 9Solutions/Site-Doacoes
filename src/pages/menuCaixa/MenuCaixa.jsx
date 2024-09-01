import React from "react";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import styles from "./MenuCaixa.module.css";
import caixa from "../../img/caixa.png";
import track from "../../img/track.png";
import {useNavigate} from "react-router-dom";
const MenuCaixa = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar/>
            <main>
                <PageTitle title={"Caixa Online"}/>

                <div className={styles["text-info"]}>
                    <h2>O QUE VOCÊ DESEJA?</h2>
                </div>

                <div className={styles["container_menu"]}>
                    <div className={styles["menu_item"]}>
                        <img src={caixa}/>
                        <button onClick={() => navigate("/fluxo-montagem-caixa")} className={styles['bt']}>Montar Caixa</button>
                    </div>
                    <div className={styles["menu_item"]}>
                        <img src={track}/>
                        <button onClick={() => navigate("/acompanhamento")} className={styles['bt']}>Acompanhar Doação</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default MenuCaixa;