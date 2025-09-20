import React from "react";
import styles from "./Header.module.css";
import logo from "/images/logo2.jpg"; // Troque pelo logo real

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Coletivo Arte na Favela" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Ínicio</a></li>
          <li><a href="/atividades">Atividades</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/comunicacao">Comunicação Ambiental</a></li>
          <li><a href="/noticias">Notícias</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
