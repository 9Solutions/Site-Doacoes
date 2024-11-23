import React from "react";
import styles from "./footer.module.css";
import ods1Image from "../../utils/img/ods-1.svg";
import ods4Image from "../../utils/img/ods-4.svg";
import ods10Image from "../../utils/img/ods-10.svg";
import ods12Image from "../../utils/img/ods-12.svg";
import ods17Image from "../../utils/img/ods-17.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles["links-endereco"]}>
        <li className={styles["links-endereco-item"]}>
          Av. Guido Caloi 1000. Bloco 6 - Térreo - Santo Amaro - SP, 05802-140
        </li>
        <li className={styles["links-endereco-item"]}>
          Alameda Europa, 88 - 2 Subsolo - Tamboré, Santana de Parnaíba - SP,
          06543-325
        </li>
        <li className={styles["links-endereco-item"]}>
          Organico Coworking - Alameda Grajaú 219. Alphaville Barueri CEP
          06454-050
        </li>
        <li className={styles["links-endereco-item"]}>
          Av. Tucunaré 1192 T 1 - 14. Tamboré - Barueri - 06460020
        </li>
      </ul>
      <div className={styles["email-cnpj"]}>
        <p>
          Email: <a href="#email">atendimento@projetocaixadesapato.org</a>
        </p>
        <p>CNPJ: 36.293.262/0001-39</p>
      </div>
      <div className={styles.images}>
        <img className={styles.image} src={ods1Image} alt="ODS 1" />
        <img className={styles.image} src={ods4Image} alt="ODS 4" />
        <img className={styles.image} src={ods10Image} alt="ODS 10" />
        <img className={styles.image} src={ods12Image} alt="ODS 12" />
        <img className={styles.image} src={ods17Image} alt="ODS 17" />
      </div>
    </div>
  );
};

export default Footer;
