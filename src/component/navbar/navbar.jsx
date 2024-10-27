import React, { useState } from "react";
import styles from "./navbar.module.css";
import logo from "../../utils/img/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className={styles["nav-wrapper"]}>
          <img className={styles["logo"]} src={logo} alt="logo" />

          <ul
            className={`${styles["navbar-list"]} ${menuOpen ? styles["show"] : ""}`}
          >
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

          <button
            className={styles["button"]}
            onClick={() => (window.location.href = "/menu-caixa")}
          >
            DOE
          </button>

          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {menuOpen && (
          <div className={styles["mobile-menu"]}>
            <button
              className={styles["mobile-button"]}
              onClick={() => (window.location.href = "/menu-caixa")}
            >
              DOE
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
