import React from "react";
import styles from "./navbar.module.css";
import logo from "../../utils/img/logo.png";

const navBar = () => {
  return (
    <>
      <nav>
        <div className={styles["nav-wrapper"]}>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">O PROJETO</a>
            </li>
            <li>
              <a href="">FAÇA SUA DOAÇÃO</a>
            </li>
            <li>
              <a href="">PARTICIPE</a>
            </li>
          </ul>
          <button>DOE</button>
        </div>
      </nav>
    </>
  );
};
export default navBar;
