import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AnimateOnScroll from '../../components/AnimateOnScroll'; // 1. IMPORTE O NOVO COMPONENTE
import styles from './SobrePage.module.css';

import bannerImage from '../../assets/images/jovens-no-clima/image 15.png';
import fotoMaria from '../../assets/images/staff/alice.jpg';
import fotoErick from '../../assets/images/staff/carrasco.png';

const SobrePage = () => {
  return (
    <>
      <Header />
      <main className={styles.sobreMain}>
        <section className={styles.bannerSection}>
          <div className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
            <div className={styles.bannerOverlay}>
              <h1 className={styles.bannerTitle}>Promovendo Cultura na Periferia</h1>
            </div>
          </div>
        </section>

        <div className={styles.pageContent}>
          <section className={styles.contentSection}>
            <div className={styles.container}>
              <AnimateOnScroll>
                <h2>O <span className={styles.highlight}>Coletivo</span></h2>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <p>
                  O Coletivo Arte na Favela é uma iniciativa sociocultural dedicada a fortalecer jovens periféricos, na faixa etária de 13 a 29 anos, por meio de encontros e atividades que integram cultura, educação, tecnologia, saúde e desenvolvimento social.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <p>
                  Fundado em de <strong>6 de novembro de 2024</strong> o coletivo tem como missão formar novas lideranças e disseminar conhecimento sobre temas urgentes como mudanças climáticas, vivências dos povos tradicionais e originários, saúde, combate ao preconceito e inovação. Utilizamos a arte em suas diversas formas – poesia, batalhas de rima, cinema, dança e comunicação – como principal ferramenta de transformação social. 
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll>
                <a href="https://docs.google.com/document/d/1nrSn-3hHNXByXHw3GPO4eLGKd5ylB_XJ4m38IDARiXs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  DOCUMENTAÇÃO CONSOLIDADA
                </a>
              </AnimateOnScroll>
            </div>
          </section>

          <section className={`${styles.contentSection} ${styles.liderancasBg}`}>
            <div className={styles.container}>
              <AnimateOnScroll>
                <h2>Nossas <span className={styles.highlight}>Lideranças</span></h2>
              </AnimateOnScroll>
              <div className={styles.lideresContainer}>
                <AnimateOnScroll>
                  <div className={styles.liderCard}>
                    <img src={fotoMaria} alt="Maria Alice de Melo Silva" className={styles.liderImage} />
                    <div className={styles.liderInfo}>
                      <h3>Maria Alice de Melo Silva</h3>
                      <h4>Fundadora e Coordenadora Geral</h4>
                      <p>Jovem líder da causa indígena e ativista socioambiental. 
                        Atua ativa como conselheira consultiva da UNICEF nas frentes de mudança climática e direitos para povos tradicionais e originários. 
                        É estudante de Terapia Ocupacional na UFPE e idealizadora do coletivo, 
                        movida pelo compromisso de usar a arte para dar voz a questões sociais e ambientais.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll>
                  <div className={styles.liderCard}>
                    <img src={fotoErick} alt="Erick Carrasco Oliveira" className={styles.liderImage} />
                    <div className={styles.liderInfo}>
                      <h3>Erick Carrasco Oliveira</h3>
                      <h4>Coordenador</h4>
                      <p>Jovem indígena periférico, ativista pelo acesso à tecnologia e educação em periferias e comunidades indígenas. 
                        Carrasco é CEO da Noot, professor, desenvolvedor e palestrante no projeto de comunicação ambiental do coletivo.
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SobrePage;