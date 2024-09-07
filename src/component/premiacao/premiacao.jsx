import React from "react";
import styles from "./premiacao.module.css";

const premiacao = ({ img, title, content }) => {
  return (
    <>
      <div className={styles["premiacao-item"]}>
        <img src={img} alt="" />
        <div className={styles["premiacao-item-text"]}>
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};
export default premiacao;
