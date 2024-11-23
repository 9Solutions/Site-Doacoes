import styles from "./acompanhamento.module.css";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import caixaImg from "../../img/caixa.png"
import React, {useEffect, useState} from "react";
import {getPedidosByUser} from "../../utils/backend/methods";
import {tranformDate} from "../../utils/global";


const Acompanhamento = () => {
  const [caixas, setCaixas] = useState([]);
  const { doadorId } = JSON.parse(sessionStorage.getItem("auth")) || {};
  const { nome } = JSON.parse(sessionStorage.getItem("auth")) || {};

  useEffect(() => {
    if (sessionStorage.getItem("auth") === null) {
      window.location.href = "/login";
    }
  }, []);


  useEffect(() => {
    getPedidosByUser(doadorId).then((response) => {
      if(response.data.length > 0) {
        setCaixas(response.data.map(pedido => {
          let caixasLen = pedido.caixas.length
          caixasLen = caixasLen === 0 ? 1 : pedido.caixas.length
  
          pedido.caixas.map(caixa => {
              return caixa["valorUn"] = pedido.valorTotal / caixasLen
          });
  
          return pedido.caixas
  
        }).flat());
      }

    })
  }, [doadorId]);


  return (
    <>
      <NavBar />
      <main>
        <h2 className={styles["titulo-acompanhamento"]}>Doações</h2>
        <p className={styles["subtitulo-acompanhamento"]}>Olá, {nome} <br></br>Acompanhe suas doações por aqui
        </p>
        {
          (caixas.length > 0) 
          ?
          caixas.map((caixa, key) => {
            let estagio = caixa.etapas.length

            return (
            <div key={key} className={styles["container-doacao"]}>

              <div className={styles["container-caixa"]}>
                <div className={styles["container-img-caixa"]}>
                  <img src={caixaImg} alt="caixa" className={styles["img-caixa"]}/>
                </div>

                <div className={styles["container-detalhes"]}>
                  <h2>Detalhes</h2>
                  <p>Data da Doação: {tranformDate(caixa.etapas[0].update)}</p>
                  <p>Valor Total: R${parseFloat(caixa.valorUn).toFixed(2)}</p>
                  <p>Entrega: {estagio === 3 ? tranformDate(caixa.etapas[caixa.etapas.length-1].update) : 'Em Processamento'}</p>
                </div>

              </div>

              <div className={styles["container-status"]}>
                <h2>Status da Doação</h2>
                <div className={styles["estagios"]}>
                  <ul>
                    <div>
                      <li className={`${estagio >= 1 ? styles['active'] : ''}`}><span
                          className="material-symbols-outlined">orders</span></li>
                      <p>Processo de Montagem</p>
                    </div>
                    <div className={`${styles["connector"]} ${estagio >= 2 ? styles['active'] : ''}`}></div>
                    <div>
                      <li className={`${estagio >= 2 ? styles['active'] : ''}`}><span
                          className="material-symbols-outlined">local_shipping</span></li>
                      <p>Em Rota de Entrega</p>
                    </div>
                    <div className={`${styles["connector"]} ${estagio >= 3 ? styles['active'] : ''}`}></div>
                    <div>
                      <li className={`${estagio >= 3 ? styles['active'] : ''}`}><span
                          className="material-symbols-outlined">inventory</span></li>
                      <p>Entregue</p>
                    </div>
                  </ul>
                </div>
              </div>

            </div>
            )
          })
          : <p className={styles["subtitulo-acompanhamento"]}>Nenhuma caixa criada até o momento</p>
    
        }
      </main>
      <Footer/>
    </>
  );
};

export default Acompanhamento;
