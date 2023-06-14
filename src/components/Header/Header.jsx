import React, { useState } from "react";
import styles from "../../styles/Header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
  const [overlay, setOverlay] = useState(false);

  const openBurger = () => {
    setOverlay(true);
  };

  const closeBtn = () => {
    setOverlay(false);
  };

  return (
    <>
      <div
        className={` ${styles.overlay} ${overlay ? styles.overlayActive : ""}`}
      >
        <nav className={styles.burgerLinks}>
          <Link onClick={closeBtn} to="/games" className={styles.burgerLink}>
            Игры
          </Link>
          <a onClick={closeBtn} href="#price" className={styles.burgerLink}>
            Цены
          </a>
          <a onClick={closeBtn} href="#contacts" className={styles.burgerLink}>
            Контакты
          </a>
        </nav>
        <button onClick={closeBtn} className={styles.closeBtn}>
          <img src="/images/icons/close.svg" alt="close" />
        </button>
      </div>
      <header className={styles.header}>
        <Link className={styles.logoAndBurger} to="/">
          <img className={styles.logo} src="/images/logo.png" alt="VR Buda" />
          <img
            onClick={openBurger}
            className={styles.burger}
            src="/images/icons/burger.svg"
            alt="Menu-burger"
          />
        </Link>
        <nav className={styles.links}>
          <Link to="/games" className={styles.link}>
            Игры
          </Link>
          <a href="../#price" className={styles.link}>
            Цены
          </a>
          <a href="#contacts" className={styles.link}>
            Контакты
          </a>
        </nav>
        <div className={styles.contacts}>
          <a href="https://www.instagram.com/vrbudakoshelevo/?igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <img
              className={styles.instagram}
              style={{ cursor: "pointer" }}
              src="/images/instagram.png"
              alt="Instagram"
            />
          </a>
          <a href="https://web.telegram.org/k/#6282017696">
            <img
              className={styles.telegram}
              style={{ cursor: "pointer" }}
              src="/images/telegram.png"
              alt="Telegram"
            />
          </a>
          <a href="tel:+375292342906">+375 29 234 2906</a>
        </div>
      </header>
    </>
  );
};

export default Header;
