import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './ComunicacaoPage.module.css';

// TODO: Substitua os caminhos pelas suas imagens corretas da pasta assets
import bannerImage from '../../assets/images/comunicacao2.jpg';
import emblemImage from '../../assets/images/logocomunicacao.jpg';
import mainImage from '../../assets/images/comunicacao1.jpg';

const ComunicacaoPage = () => {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        <section className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className={styles.bannerOverlay}>
            <h1>Comunicação Ambiental</h1>
          </div>
        </section>

        <section className={styles.introSection}>
          <div className={styles.introText}>
            <h2>Comunicação Ambiental</h2>
            <p>
              Este projeto capacita jovens de 13 a 29 anos para se tornarem comunicadores e agentes de mudança em suas comunidades. Com foco em três eixos centrais – Mudanças Climáticas, Saúde e Tecnologia, a iniciativa ensina a criar conteúdo e a usar ferramentas digitais para informar e mobilizar. O projeto foi um dos selecionados no edital "Jovens no Clima" da Prefeitura do Recife, um reconhecimento da sua relevância e potencial de impacto.
            </p>
          </div>
          <div className={styles.introEmblem}>
            <img src={emblemImage} alt="Emblema Comunicação Ambiental" />
          </div>
        </section>

        <section className={styles.mainImageSection}>
          <img src={mainImage} alt="Jovens participando do projeto" />
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ComunicacaoPage;