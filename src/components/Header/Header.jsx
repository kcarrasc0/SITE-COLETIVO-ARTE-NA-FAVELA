import React from "react";
import styles from "./Header.module.css";
import logo from "/images/logo2.jpg";
import { HomeIcon, PaletteIcon, InfoIcon, LeafIcon, NewsIcon } from "./Icons";

const NAV = [
  { href: "/", label: "Início", icon: <HomeIcon /> },
  { href: "/atividades", label: "Atividades", icon: <PaletteIcon /> },
  { href: "/sobre", label: "Sobre", icon: <InfoIcon /> },
  { href: "/comunicacao", label: "Comunicação Ambiental", icon: <LeafIcon /> },
  { href: "/noticias", label: "Notícias", icon: <NewsIcon /> },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Coletivo Arte na Favela" />
      </div>

      <nav className={styles.nav} aria-label="Navegação principal">
        <ul className={styles.menu}>
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.item}
                aria-label={item.label} // acessível quando o texto estiver retraído
              >
                <span className={styles.icon} aria-hidden="true">
                  {item.icon}
                </span>
                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
