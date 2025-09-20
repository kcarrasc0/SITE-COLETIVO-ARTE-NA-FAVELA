import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// 1. Mudei a importação para .module.css para seguir o padrão do projeto
import styles from "./NoticiasPage.module.css"; 

// 2. Adicionei a importação de todas as suas imagens
import imgJovensNoClima from "../../assets/images/jovensnoclima.jpg";
import imgCursoTech from "../../assets/images/cursotech.jpg";
import imgFeiraLiteraria from "../../assets/images/feiral.jpg";
import imgEventoJovensClima from "../../assets/images/eventjc.jpg";
import imgPlanoNacional from "../../assets/images/planonacional.jpg";
import imgFeiraPataxoh from "../../assets/images/feirapataxo.jpg";
import imgCOP30 from "../../assets/images/Image3.jpg"; // Mantive o nome original que você usou
import imgComunicacao1 from "../../assets/images/comunicacao1.jpg";


function NoticiasPage() {
  return (
    <>
      <Header />
      {/* 3. Apliquei as classes usando a variável 'styles' do CSS Modules */}
      <main className={styles['noticias-container']}>
        {/* 🔹 Sessão de Destaques */}
        <section className={styles.destaques}>
          <article className={styles['destaque-principal']}>
            <img
              src={imgJovensNoClima} // 4. Usei a variável da imagem importada
              alt="Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima"
            />
            <div className={styles.overlay}>
              <span className={styles.tag}>DESTAQUES</span>
              <h2>
                Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima.
              </h2>
            </div>
          </article>

          <div className={styles['destaques-secundarios']}>
            <article className={styles.card}>
              <img src={imgCursoTech} alt="Hologramas" />
              <div className={styles.overlay}>
                <span className={styles.tag}>DESTAQUES</span>
                <h3>
                  Coletivo Arte na Favela lança curso de Tecnologia para jovens!
                </h3>
              </div>
            </article>
            <article className={styles.card}>
              <img src={imgFeiraLiteraria} alt="Internet" />
              <div className={styles.overlay}>
                <span className={styles.tag}>DESTAQUES</span>
                <h3>
                  O Coletivo participou da abertura da feira literária 2025, que aconteceu na Erem Dom Sebastiao Leme.
                </h3>
              </div>
            </article>
            <article className={styles.card}>
              <img src={imgEventoJovensClima} alt="Vestíveis" />
              <div className={styles.overlay}>
                <span className={styles.tag}>DESTAQUES</span>
                <h3>
                  Participação em um evento do jovens no clima da SJDHJ RECIFE
                </h3>
              </div>
            </article>
            <article className={styles.card}>
              <img src={imgPlanoNacional} alt="Realidade Virtual" />
              <div className={styles.overlay}>
                <span className={styles.tag}>DESTAQUES</span>
                <h3>
                  Plano Nacional dos Povos e Comunidades Tradicionais
                </h3>
              </div>
            </article>
          </div>
        </section>

        {/* 🔹 Sessão Mais Lidas */}
        <section className={styles['mais-lidas']}>
          <header className={styles['section-header']}>
            <h2>Mais lidas da semana</h2>
            <a href="#">Ver tudo →</a>
          </header>
          <div className={styles['noticias-grid']}>
            <article className={styles.card}>
              <img src={imgJovensNoClima} alt="Veículos" />
              <div className={styles.overlay}>
                <span className={styles.tag}>COMUNICAÇÃO AMBIENTAL</span>
                <h3>Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima</h3>
              </div>
            </article>

            <article className={styles.card}>
              <img src={imgFeiraPataxoh} alt="Hologramas" />
              <div className={styles.overlay}>
                <span className={styles.tag}>ALICE XUKURU</span>
                <h3>Nossa fundadora é convidada para participar da 1 feira Pataxóh</h3>
              </div>
            </article>

            <article className={styles.card}>
              <img src={imgCOP30} alt="Jovens no Clima" />
              <div className={styles.overlay}>
                <span className={styles.tag}>JOVENS NO CLIMA</span>
                <h3>Projeto Comunicação Ambiental vai para oficina sobre a COP30 Jovens no Clima</h3>
              </div>
            </article>

            <article className={styles.card}>
              <img src={imgComunicacao1} alt="Projeto Jovens no Clima finaliza" />
              <div className={styles.overlay}>
                <span className={styles.tag}>JOVENS NO CLIMA</span>
                <h3>Projeto Jovens no Clima finaliza Hoje dia 20 de setembro</h3>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NoticiasPage;