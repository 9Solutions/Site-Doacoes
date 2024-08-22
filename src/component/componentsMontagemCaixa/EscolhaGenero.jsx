import React from "react";
import styles from "./EscolhaGenero.module.css";
import menina from "../../img/menina 2.png";
import menino from "../../img/garoto (1) 1.png";

const EscolhaGenero = ({setGenero}) => {
    const handleClick = (elem, genero) => {
        document.querySelectorAll(`.${styles["container_genero"]} div`).forEach((div) => {
            div.classList.remove(styles["active"]);
        });

        elem.classList.add(styles["active"]);

        setGenero(genero);
    }

    return (
        <div className={styles["container_genero"]}>
            <div onClick={(e) => handleClick(e.currentTarget, "F")}>
                <img src={menina} alt={"Menina"}/>
                <p>MENINA</p>
            </div>

            <div onClick={(e) => handleClick(e.currentTarget, "M")}>
                <img src={menino} alt={"Menino"}/>
                <p>MENINO</p>
            </div>
        </div>
    );
}

export default EscolhaGenero;