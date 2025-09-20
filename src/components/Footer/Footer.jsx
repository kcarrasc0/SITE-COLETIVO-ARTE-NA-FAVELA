// src/components/Footer/Footer.jsx

import React from 'react';
import styles from './Footer.module.css';

// TODO: Confirme se os caminhos das imagens estão corretos a partir desta pasta
import logoFundo from '../../assets/images/logocoletivo.png';
import logoKcarrasco from '../../assets/images/logokcarrasco.png';
import logoJovens from '../../assets/images/logojovensnoclima.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* SEÇÃO DE LOGOS ADICIONADA */}
      <div className={styles.parceiros}>
        <h3 className={styles.parceirosTitulo}>Isso tudo foi possível graças:</h3>
        <div className={styles.logosContainer}>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={logoFundo} alt="Logo Fundo de Olho no Futuro" />
          </a>
          <a href="kcarrasco.vercel.app" target="_blank">
            <img src={logoKcarrasco} alt="Logo KCarrasco" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={logoJovens} alt="Logo Jovens Pelo Clima" />
          </a>
        </div>
      </div>
      {/* FIM DA SEÇÃO DE LOGOS */}
      
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Coletivo Arte na Favela. Made by KCARRASCO
      </div>
    </footer>
  );
};

export default Footer;