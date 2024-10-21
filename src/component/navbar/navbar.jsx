import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../utils/img/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className={styles["nav-wrapper"]}>
          <img className={styles["logo"]} src={logo} alt="logo" />
          <ul className={`${styles["navbar-list"]} ${isOpen ? styles["open"] : ""}`}>
            <li>
              <a className={styles["navbar-list-item"]} href="/">HOME</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="/sobre-nos">O PROJETO</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="/formas-doacao">FAÇA SUA DOAÇÃO</a>
            </li>
            <li>
              <a className={styles["navbar-list-item"]} href="/seja-um-anjo">PARTICIPE</a>
            </li>
          </ul>
          <button className={styles["button"]} onClick={() => window.location.href = "/menu-caixa"}>DOE</button>
          <div className={styles["hamburger"]} onClick={toggleMenu}>
            <div className={styles["bar"]}></div>
            <div className={styles["bar"]}></div>
            <div className={styles["bar"]}></div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
