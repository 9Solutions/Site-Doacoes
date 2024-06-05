import React from "react";
import styles from "./navbar.module.css";
import logo from "../../utils/img/logo.png";

const navBar = () => {
  return (
    <>
      <nav>
        <div className={styles["nav-wrapper"]}>
          <img className={styles["logo"]} src={logo} alt="logo" />
          <ul className={styles["navbar-list"]}>
            <li>
              <a className={styles["navbar-list-item"]} href="">HOME</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="">O PROJETO</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="">FAÇA SUA DOAÇÃO</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="">PARTICIPE</a>
            </li>
          </ul>
          <button className={styles["button"]}>DOE</button>
        </div>
      </nav>
    </>
  );
};
export default navBar;
