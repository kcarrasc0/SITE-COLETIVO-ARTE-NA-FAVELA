import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NoticiasPage.css";

function NoticiasPage() {
  return (
    <>
      <Header />
      <main className="noticias-container">
        {/* 🔹 Sessão de Destaques */}
        <section className="destaques">
          <article className="destaque-principal">
            <img
              src="src/assets/images/jovensnoclima.jpg"
              alt="Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima"
            />
            <div className="overlay">
              <span className="tag">DESTAQUES</span>
              <h2>
                Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima.
              </h2>
            </div>
          </article>

          <div className="destaques-secundarios">
            <article className="card">
              <img src="src/assets/images/cursotech.jpg" alt="Hologramas" />
              <div className="overlay">
                <span className="tag">DESTAQUES</span>
                <h3>
                  Coletivo Arte na Favela lança curso de Tecnologia para jovens!
                </h3>
              </div>
            </article>
            <article className="card">
              <img src="src/assets/images/feiral.jpg" alt="Internet" />
              <div className="overlay">
                <span className="tag">DESTAQUES</span>
                <h3>
                  O Coletivo participou da abertura da feira literária 2025, que aconteceu na Erem Dom Sebastiao Leme.
                </h3>
              </div>
            </article>
            <article className="card">
              <img src="src/assets/images/eventjc.jpg"  alt="Vestíveis" />
              <div className="overlay">
                <span className="tag">DESTAQUES</span>
                <h3>
                  Participação em um evento do jovens no clima da SJDHJ RECIFE
                </h3>
              </div>
            </article>
            <article className="card">
              <img src="src/assets/images/planonacional.jpg" alt="Realidade Virtual" />
              <div className="overlay">
                <span className="tag">DESTAQUES</span>
                <h3>
                 Plano Nacional dos Povos e Comunidades Tradicionais
                </h3>
              </div>
            </article>
          </div>
        </section>

        {/* 🔹 Sessão Mais Lidas */}
        <section className="mais-lidas">
          <header className="section-header">
            <h2>Mais lidas da semana</h2>
            <a href="#">Ver tudo →</a>
          </header>
       <div className="noticias-grid">
  <article className="card">
    <img src="src/assets/images/jovensnoclima.jpg" alt="Veículos" />
    <div className="overlay">
      <span className="tag">COMUNICAÇÃO AMBIENTAL</span>
      <h3>Coletivo Arte na Favela entra com Projeto Comunicação Ambiental no edital Jovens no Clima</h3>
    </div>
  </article>

  <article className="card">
    <img src="src/assets/images/feirapataxo.jpg" alt="Hologramas" />
    <div className="overlay">
      <span className="tag">ALICE XUKURU</span>
      <h3>Nossa fundadora é convidada para participar da 1 feira Pataxóh</h3></div>
    
  </article>

  <article className="card">
    <img src="src/assets/images/Image3.jpg" alt="Jovens no Clima" />
    <div className="overlay">
      <span className="tag">JOVENS NO CLIMA</span>
      <h3>Projeto Comunicação Ambiental vai para oficina sobre a COP30 Jovens no Clima</h3>
    </div>
  </article>

  <article className="card">
    <img src="src/assets/images/comunicacao1.jpg" alt="" />
    <div className="overlay">
      <span className="tag">JOVENS NO CLIMA</span>
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
