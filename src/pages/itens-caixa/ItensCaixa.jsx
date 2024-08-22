import React, { useEffect, useState } from 'react';
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import styles from './ItensCaixa.module.css';
import openBoxIcon from "../../utils/img/open-box-icon.png";
import shirtIcon from "../../utils/img/shirt-icon.png";
import personIcon from "../../utils/img/person-icon.png";
import lolipopIcon from "../../utils/img/lolipop-icon.png";
import boxIcon from "../../utils/img/box-icon.png";

function ItensCaixa() {

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles['caixa-content']}>
        <div className={`${styles['title-section']} ${isActive ? styles['active'] : ''}`}>
          <h2>Caixa Online</h2>
          <div className={styles['underline']}></div>
          <p><strong>Inclui:</strong> R$63,00 de itens da Caixinha + R$15,00 de processamento e envio.</p>
        </div>

        <div className={styles['steps']}>
          <div className={styles['step']}>
            <img src={openBoxIcon} alt="Step 1" />
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <img src={shirtIcon} alt="Step 2" />
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <img src={personIcon} alt="Step 3"/>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <img src={lolipopIcon} alt="Step 4" />
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <img src={boxIcon} alt="Step 5" />
          </div>
        </div>

        <div className={styles['item-box']}>
          <h3>Itens da sua caixa - Valor final: R$ 78,00</h3>

          <div className={styles['item-list']}>
            <div className={styles['item']}>Camiseta Azul</div>
            <div className={styles['item']}>Garrafinha</div>
            <div className={styles['item']}>Básico</div>
            <div className={styles['item']}>Toalhas</div>
            <div className={styles['item']}>Kit Dental</div>
            <div className={styles['item']}>Brinquedo</div>
            <div className={styles['item']}>Giz de Cera</div>
            <div className={styles['item']}>Sandálias</div>
          </div>
        </div>

        <div className={styles['buttons']}>
          <button className={styles['back-button']}>Voltar</button>
          <button className={styles['next-button']}>Adicionar ao Carrinho</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ItensCaixa;
