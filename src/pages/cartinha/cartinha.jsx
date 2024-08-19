import React, { useEffect, useState } from 'react';
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import styles from './cartinha.module.css';
import boxIcon from "../../utils/img/box-icon.png";
import lolipopIcon from "../../utils/img/lolipop-icon.png";
import openBoxIcon from "../../utils/img/open-box-icon.png";
import personIcon from "../../utils/img/person-icon.png";
import shirtIcon from "../../utils/img/shirt-icon.png";

function Cartinha() {

  const [file, setFile] = useState();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles['cartinha-content']}>
        <div className={`${styles['title-section']} ${isActive ? styles['active'] : ''}`}>
          <h2>Caixa Online</h2>
          <div className={styles['underline']}></div>
          <p><strong>Inclui:</strong> R$63,00 de tarifa de Caixa e R$15,00 de processamento e envio.</p>
        </div>

        <div className={styles['steps']}>
          <div className={styles['step']}>
            <a href=""><img src={openBoxIcon} alt="Step 1" /></a>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <a href=""><img src={shirtIcon} alt="Step 2" /></a>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <a href=""><img src={personIcon} alt="Step 3"/></a>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <a href=""><img src={lolipopIcon} alt="Step 4" /></a>
          </div>
          <div className={styles['line']}></div>
          <div className={styles['step']}>
            <img src={boxIcon} alt="Step 5" />
          </div>
        </div>

        <div className={styles['card-section']}>
          <h3>Faça sua cartinha:</h3>
          <p>Um pedido especial para encher de esperança e alegria o coração de uma criança. Descreva com carinho sua mensagem e escolha a foto que acompanhará sua cartinha:</p>

          <div className={styles['content-row']}>
            <div className={styles['upload-photo']}>
              <div className={styles['photo-placeholder']}>
              <img src={file} className={styles['photo-placeholder']} />
              </div>
              <input type="file" onChange={handleChange} />
            </div>

            <div className={styles['textarea-container']}>
              <label htmlFor="cartinha-textarea" className={styles['textarea-label']}>Sua carta:</label>
              <textarea id="cartinha-textarea" placeholder="Escreva sua carta aqui..."></textarea>
            </div>
          </div>
        </div>

        <div className={styles['buttons']}>
          <button className={styles['back-button']}>Voltar</button>
          <button className={styles['next-button']}>Avançar</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cartinha;
