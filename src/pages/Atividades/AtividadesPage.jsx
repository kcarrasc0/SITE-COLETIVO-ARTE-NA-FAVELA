import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './AtividadesPage.module.css';

// TODO: Substitua os caminhos pelas suas imagens corretas da pasta assets
import bannerImage from '../../assets/images/image1.jpg'; // Imagem de fundo do banner
import imgComAmbiental from '../../assets/images/atividade1.jpg';
import imgBatalhaCultural from '../../assets/images/atividade2.jpg';
import imgComBreaknasescolas from '../../assets/images/atividade3.jpg';
import imgCineIbura from '../../assets/images/atividade4.jpg';
import imgResenhaib from '../../assets/images/atividade5.png';
import imgPeriferiaTech from '../../assets/images/atividade6.JPG';
import imgEcoVision from '../../assets/images/atividade7.png';

// Dados das atividades para facilitar a manutenção
const atividadesData = [
  {
    image: imgComAmbiental,
    title: 'Comunicação Ambiental',
    description: 'Este projeto capacita jovens de 13 a 29 anos para se tornarem comunicadores e agentes de mudança em suas comunidades. Com foco em três eixos centrais — Mudanças Climáticas, Saúde e Tecnologia —, a iniciativa ensina a criar conteúdo e a usar ferramentas digitais para informar e mobilizar. O projeto foi um dos selecionados no edital "Jovens no Clima" da Prefeitura do Recife, um reconhecimento da sua relevância e potencial de impacto.',
  },
  {
    image: imgBatalhaCultural,
    title: 'Batalha Cultural',
    description: 'Expressão artística fundamental da cultura hip-hop, a Batalha Cultual dá voz, movimento e identidade à juventude negra e periférica. O evento, que ocorre todas às quartas-feiras nas praças da comunidade do Ibura, promove a cultura do diálogo e do respeito. As rimas se tornam ferramentas para debates potentes sobre povos originários, a pauta LGBTQIA+ e o racismo estrutural.',
  },
  {
    image: imgComBreaknasescolas,
    title: 'Comunicação Ambiental',
    description: 'Nascido no coração da cultura hip-hop como uma poderosa expressão de liberdade e resistência, o breakdance é a estrela deste projeto. Levamos a arte do break para escolas da periferia, ensinando não apenas os movimentos, mas também a história e os valores do hip-hop como forma de empoderamento e superação de preconceitos. As atividades culminam em uma oficina de grafite, unindo dois elementos marcantes da cultura de rua e transformando os muros em telas de expressão.',
  },
  {
    image: imgCineIbura,
    title: 'Batalha Cultural',
    description: 'O Cine Ibura é o nosso cineclube comunitário. O projeto promove exibições de filmes, documentários e produções audiovisuais que estimulam o debate sobre questões sociais, culturais e ambientais, contendo também o Slan de poesia. É um espaço para ampliar repertórios, formar senso crítico e celebrar o cinema como ferramenta de reflexão e transformação.',
  },
  {
    image: imgResenhaib,
    title: 'Comunicação Ambiental',
    description: 'A "Resenha IB" é um projeto voltado ao fortalecimento de MCs e artistas da cena hip-hop local. A iniciativa oferece uma estrutura para a gravação de músicas autorais, promove encontros para troca de experiências (networking) e realiza palestras sobre a história do rap e a pauta antirracista. Além disso, o projeto inclui um espaço de autocuidado, oferecendo serviços como cortes de cabelo e tranças, fortalecendo a autoestima e a identidade dos jovens.',
  },
  {
    image: imgPeriferiaTech,
    title: 'Batalha Cultural',
    description: 'Oferecemos cursos de Tecnologia de forma remota, tecnolohgia no dia a dia, na atuação profissional e também ensinamos boas práticas do mercado de trabalho.',
  },
  {
    image: imgEcoVision,
    title: 'Batalha Cultural',
    description: 'Web App de monitoramento ambiental criado nas aulas de Tecnologia do Comunicação Ambiental, para acompanhar dados de desmatamento.',
  },
];


const AtividadesPage = () => {
  return (
    <>
      <Header />
      <main className={styles.atividadesContainer}>
        <section className={styles.banner} style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className={styles.bannerOverlay}>
            <h1>Mudando a quebrada com atitude!</h1>
          </div>
        </section>

        <section className={styles.listaAtividades}>
          <h2>Nossas <span className={styles.highlight}>Atividades</span></h2>
          <div className={styles.cardsContainer}>
            {atividadesData.map((atividade, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={atividade.image} alt={atividade.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3>{atividade.title}</h3>
                  <p>{atividade.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AtividadesPage;