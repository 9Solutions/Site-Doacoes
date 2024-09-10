import React from "react";
import style from "./Carrinho.module.css";
import Navbar from "../../component/navbar/navbar";
import PageTitle from "../../component/pageTitle/PageTitle";
import caixa from "../../img/caixa.png";
import styles from "../fluxoMontagemCaixa/FluxoMontagemCaixa.module.css";
import Footer from "../../component/footer/footer";
import {useNavigate} from "react-router-dom";

const Carrinho = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <main>
                <PageTitle title="Caixa Online" />
                <h2 className={style["title"]}>Carrinho <span className="material-symbols-outlined">shopping_cart</span></h2>
                <div className={"centralize"}>
                    <div className={style["container-cart"]}>
                        <div className={style["caixa"]}>
                            <div className={style["container-caixa"]}>
                                <img src={caixa} alt={"Caixa"}/>
                                <div className={style["caixa-infos"]}>
                                    <div className={style["infos"]}>
                                        <h3>1 - Caixa</h3>
                                        <p>Gênero: </p>
                                        <p>Idade: </p>
                                    </div>
                                    <div className={style["caixa-buttons"]}>
                                        <span className="material-symbols-outlined">add</span>
                                        <span className="material-symbols-outlined">remove</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style["container-valores"]}>
                                <div className={style["valores"]}>
                                    <div>
                                        <p>Quantidade: 1</p>
                                        <p>Valor Unitário: R$ 78,99</p>
                                    </div>
                                    <p>Valor Total: R$ 78,99</p>
                                </div>
                            </div>
                        </div>
                        <h3>Valor Total: R$ 78,99</h3>
                    </div>

                    <div className={styles["buttons"]}>
                        <button className={styles['next']} style={{width: "200px"}} onClick={() => {navigate("/pagamento")}}>Pagar</button>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Carrinho;