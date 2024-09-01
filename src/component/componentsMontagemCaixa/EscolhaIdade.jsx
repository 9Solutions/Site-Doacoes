import React from "react";
import faixa2a4 from "../../img/faixa2a4.png";
import faixa5a9 from "../../img/faixa5a9.png";
import faixa10a14 from "../../img/faixa10a14.png";
import styles from "./EscolhaIdade.module.css";

const EscolhaGenero = ({setFaixa, faixa}) => {
    function handleClick (elem, faixa){
        document.querySelectorAll(`.${styles["container_faixa"]} div`).forEach((div) => {
            div.classList.remove(styles["active"]);
        });

        elem.classList.add(styles["active"]);

        setFaixa(faixa);
    }

    return (
        <div className={styles["container_faixa"]}>
            <div onClick={(e) => handleClick(e.currentTarget, 1)} className={faixa === 1 ? styles['active'] : ''}>
                <img src={faixa2a4} alt={"Idade 2 a 4 Anos"}/>
                <p>2 a 4 Anos</p>
            </div>

            <div onClick={(e) => handleClick(e.currentTarget, 2)} className={faixa === 2 ? styles['active'] : ''}>
                <img src={faixa5a9} alt={"Idade 5 a 9 Anos"}/>
                <p>5 a 9 Anos</p>
            </div>

            <div onClick={(e) => handleClick(e.currentTarget, 3)} className={faixa === 3 ? styles['active'] : ''}>
                <img src={faixa10a14} alt={"Idade 10 a 14 Anos"}/>
                <p>10 a 14 Anos</p>
            </div>
        </div>
    );
}

export default EscolhaGenero;