import styles from "./Header.module.css";
import logo from "../../assets/images/logos/logo2.png";
import { HomeIcon, PaletteIcon, InfoIcon, LeafIcon, NewsIcon } from "./Icons";

const nav = [
  { href: "/", label: "Início", icon: <HomeIcon /> },
  { href: "/atividades", label: "Atividades", icon: <PaletteIcon /> },
  { href: "/sobre", label: "Sobre", icon: <InfoIcon /> },
  { href: "/comunicacao", label: "Comunicação Ambiental", icon: <LeafIcon /> },
  { href: "/noticias", label: "Notícias", icon: <NewsIcon /> },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logoContainer} aria-label="Página inicial">
          <img src={logo} alt="Logo Coletivo Arte na Favela" className={styles.logo} />
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.menu}>
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.item}
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
      </div>
    </header>
  );
};

export default Header;