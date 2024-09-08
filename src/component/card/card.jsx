import React from "react";
import styles from "./card.module.css";

const card = ({img, title, content}) => {
  return (
    <>
      <li className={styles["info-banner-item"]}>
        <img src={img} alt="" />
        <h4>{title}</h4>
        <p>{content}</p>
      </li>
    </>
  );
};
export default card;