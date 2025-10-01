import styles from './Footer.module.css';

import logoFundo from '/assets/images/logos/logo2.png';
import logoKcarrasco from '/assets/images/logos/logokcarrasco.png';
import logoJovens from '/assets/images/logos/logojovensnoclima.png';
import logoRfec from '/assets/images/logos/rfec-logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.parceiros}>
        <h3 className={styles.parceirosTitulo}>Isso tudo foi possível graças:</h3>
        <div className={styles.logosContainer}>
          <a href="/" rel="noopener noreferrer">
            <img src={logoFundo} alt="Logo Fundo de Olho no Futuro" />
          </a>
          <a href="https://kcarrasco.vercel.app" target="_blank">
            <img src={logoKcarrasco} alt="Logo KCarrasco" />
          </a>
          <a href="/" rel="noopener noreferrer">
            <img src={logoJovens} alt="Logo Jovens Pelo Clima" />
          </a>
          <a href="https://rfec.com.br" target="_blank" rel="noopener noreferrer">
            <img src={logoRfec} alt="Logo RFEC" />
          </a>
        </div>
      </div>
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Coletivo Arte na Favela - Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;