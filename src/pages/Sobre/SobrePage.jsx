import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './SobrePage.module.css';

// TODO: Substitua os caminhos pelas suas imagens corretas da pasta assets
import bannerImage from '../../assets/images/image5.jpg'; // Imagem de fundo do banner
import fotoMaria from '../../assets/images/alice.jpg'; // Foto de Maria Alice
import fotoErick from '../../assets/images/carrasco.png'; // Foto de Erick Carrasco


const SobrePage = () => {
  return (
    <>
      <Header />
      <main className={styles.sobreMain}>
        <section className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className={styles.bannerOverlay}>
            <h1>Promovendo Cultura na Periferia</h1>
          </div>
        </section>

        <section className={styles.coletivo}>
          <h2>O <span className={styles.highlight}>Coletivo</span></h2>
          <p>
            O Coletivo Arte na Favela é uma iniciativa sociocultural dedicada a fortalecer jovens periféricos, na faixa etária de 13 a 29 anos, por meio de encontros e atividades que integram cultura, educação, tecnologia, saúde e desenvolvimento social.
            Fundado em de <strong>6 de novembro de 2024</strong> o coletivo tem como missão formar novas lideranças e disseminar conhecimento sobre temas urgentes como mudanças climáticas, vivências dos povos tradicionais e originários, saúde, combate ao preconceito e inovação. Utilizamos a arte em suas diversas formas – poesia, batalhas de rima, cinema, dança e comunicação – como principal ferramenta de transformação social.
          </p>
<a href="https://docs.google.com/document/d/1nrSn-3hHNXByXHw3GPO4eLGKd5ylB_XJ4m38IDARiXs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
  <button className={styles.ctaButton}>DOCUMENTAÇÃO CONSOLIDADA</button>
</a>
        </section>

        <section className={styles.liderancas}>
          <h2>Nossas <span className={styles.highlight}>Lideranças</span></h2>
          <div className={styles.lideresContainer}>
            <div className={styles.liderCard}>
              <img src={fotoMaria} alt="Maria Alice de Melo Silva" />
              <div className={styles.liderInfo}>
                <h3>Maria Alice de Melo Silva (Fundadora e Coordenadora Geral)</h3>
                <p>Jovem líder da causa indígena e ativista socioambiental. Atua ativa como conselheira consultiva da UNICEF nas frentes de mudança climática e direitos para povos tradicionais e originários. É estudante de Terapia Ocupacional na UFPE e idealizadora do coletivo, movida pelo compromisso de usar a arte para dar voz a questões sociais e ambientais.</p>
              </div>
            </div>
            <div className={styles.liderCard}>
              <img src={fotoErick} alt="Erick Carrasco Oliveira" />
              <div className={styles.liderInfo}>
                <h3>Erick Carrasco Oliveira (Coordenador)</h3>
                <p>Jovem indígena periférico, ativista pelo acesso à tecnologia e educação em periferias e comunidades indígenas. Carrasco é CEO da Noot, professor, desenvolvedor e palestrante no projeto de comunicação ambiental do coletivo.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default SobrePage;