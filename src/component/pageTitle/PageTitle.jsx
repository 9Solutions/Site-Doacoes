import React from "react";
import styles from "./PageTitle.module.css";


const PageTitle = ({ title }) => {
    return (
        <>
            <div className={styles["page-title"]}>
                <h1>{title}</h1>
                <div className={styles["title-line"]}></div>
            </div>
            <span className={styles["subtitle"]}>
                    Inclui: R$63,00 de Itens da Caixinha + R$15,00 de processamento e envio.
            </span>
        </>
    );
}

export default PageTitle;