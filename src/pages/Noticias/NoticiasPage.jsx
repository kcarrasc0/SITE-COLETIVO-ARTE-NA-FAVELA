import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NoticiaCard from "../../components/NoticiaCard/NoticiaCard";
import NoticiaModal from "../../components/NoticiaModal/NoticiaModal";

import styles from "./NoticiasPage.module.css";

// Importações de imagens
import imgRecAlice from "/assets/images/noticias/recalice1.png";
import imgRecZeca from "/assets/images/noticias/reczeca.jpg";
import imgCop30 from "/assets/images/noticias/cop30.jpg";
import imgCursoTech from "/assets/images/cursos/cursotech.jpg";
import imgPlanoNacional from "/assets/images/planonacional.jpg";
import imgFeiraPataxoh from "/assets/images/noticias/feirapataxo.jpg";
import imgEcoVision from "/assets/images/noticias/ecovision.png";
import imgComunicacao1 from "/assets/images/noticias/comunicacao1.jpg";
import imgRecnPlay from "/assets/images/noticias/recnplay.png";


// --- DADOS COMPLETOS PARA AS SEÇÕES ---

const loremText = "Esta é a continuação do texto da notícia, onde os detalhes completos são apresentados ao usuário após o clique. O conteúdo aqui pode ser tão longo quanto necessário para descrever todo o acontecimento, oferecendo uma experiência mais rica e informativa.";

const heroPrincipalData = {
    id: 100, imagem: imgRecAlice, alt: "Alice Xukuru", tag: "EVENTOS", titulo: "Alice tem presença confirmada no maior evento ao ar livre da america latina!", textoCompleto: `Aos 20 anos, Alice Xukuru já é referência como jovem ativista. Indígena do povo Xukuru do Ororubá, PCD e fundadora do coletivo Artenafavela, ela atua na defesa dos povos tradicionais, das pessoas com deficiência e nas lutas contra as mudanças climáticas. Conselheira consultiva do UNICEF, busca inspirar jovens por meio da sua trajetória e da arte como ferramenta de transformação. ${loremText}`
};

const heroDireitaData = [
  { id: 1, imagem: imgRecZeca, alt: "Zeca", tag: "TECNOLOGIA", titulo: "Zeca tem alestra confirmada sobre tecnologia e música no Rec'n'Play", textoCompleto: `Zeca estara como palestrante na palestra “Sintetizando o futuro: A inteligência artificial na música”. Vai ser uma oportunidade única para conversarmos sobre como a IA está transformando a criação, produção e a nossa experiência musical, explorando os limites e as possibilidades dessa revolução. Será uma honra ter vocês lá para trocar ideias e descobrir os sons do amanhã! Conto com a presença de vocês!
 ${loremText}` },

  { id: 2, imagem: imgCop30, alt: "Jovens no Clima", tag: "COP30", titulo: "Coletivo Arte na favela agora se prepara para ida a COP30", textoCompleto: `A Conferência das Nações Unidas sobre as Mudanças Climáticas de 2025, também chamada de COP30 será a 30.ª Conferência das Nações Unidas sobre as Mudanças Climáticas, prevista para ocorrer entre os dias 10 e 21 de novembro de 2025, na cidade de Belém. ${loremText}` },

  { id: 3, imagem: imgPlanoNacional, alt: "Plano Nacional", tag: "DIREITOS", titulo: "Conheça o Plano Nacional dos Povos Tradicionais.", textoCompleto: `O plano, que visa garantir direitos e promover a sustentabilidade, foi aprovado em sessão histórica. ${loremText}` },
];

const maisLidasSemanaData = [
  { id: 4, imagem: imgComunicacao1, alt: "Comunicação Ambiental", tag: "INOVAÇÃO", titulo: "Projeto Comunicação Ambiental chega ao seu último dia de atuação", textoCompleto: `No dia 21 de setembro o Comunicação Ambiental chega ao fim. O projeto capacita jovens de 13 a 29 anos para se tornarem comunicadores e agentes de mudança em suas comunidades. Com foco em três eixos centrais — Mudanças Climáticas, Saúde e Tecnologia.  ${loremText}` },

  { id: 5, imagem: imgFeiraPataxoh, alt: "Videoconferência", tag: "EVENTO", titulo: "Nossa fundadora é convidada para participar da 1 feira Pataxóh", textoCompleto: `A Feira Literária Pataxó (Felipa) é um evento que celebra e divulga a cultura e a literatura do Povo Pataxó, com foco na língua Patxohã e nas artes e vivências indígenas. A 1ª edição, realizada em Porto Seguro (BA) em agosto de 2025, buscou valorizar a rica literatura e a diversidade do povo Pataxó, atraindo escritores, editores e leitores interessados na cultura indígena. ${loremText}` },

  { id: 6, imagem: imgEcoVision, alt: "EcoVision", tag: "TECNOLOGIA", titulo: "Sistema de monitormaneto ambinetal, EcoVision ganha data de lançamento!", textoCompleto: `Web App de monitoramento ambiental criado nas aulas de Tecnologia do Comunicação Ambiental, para acompanhar dados de desmatamento será lançado um semana antes da COP30. ${loremText}` },

  { id: 7, imagem: imgRecnPlay, alt: "REC'n'Pay", tag: "EVENTO", titulo: "Menos de uma semana para o Rec'n'Play, um dos maiores eventos da america latina em Recife", textoCompleto: `Um festival que reúne mais de 90 mil pessoas em quatro dias no coração do Nordeste – esse é o REC’n’Play. Consolidando-se como o maior evento gratuito de tecnologia e inovação do Brasil, no ano em que o Porto Digital completa 25 anos, o festival celebra as pessoas e as relações humanas, para lembrar que quem está por trás de tantas inovações e discussões sobre inteligência artificial, automações e algoritmos, são seres humanos. ${loremText}` },
];

const destaquesIaData = [
    { id: 8, imagem: imgRecZeca, alt: "Zeca", tag: "TECNOLOGIA", titulo: "Zeca tem alestra confirmada sobre tecnologia e música no Rec'n'Play", textoCompleto: `Zeca estara como palestrante na palestra “Sintetizando o futuro: A inteligência artificial na música”. Vai ser uma oportunidade única para conversarmos sobre como a IA está transformando a criação, produção e a nossa experiência musical, explorando os limites e as possibilidades dessa revolução. Será uma honra ter vocês lá para trocar ideias e descobrir os sons do amanhã! Conto com a presença de vocês! ${loremText}` },

    { id: 9, imagem: imgCop30, alt: "Jovens no Clima", tag: "COP30", titulo: "Coletivo Arte na favela agora se prepara para ida a COP30", textoCompleto: `A Conferência das Nações Unidas sobre as Mudanças Climáticas de 2025, também chamada de COP30 será a 30.ª Conferência das Nações Unidas sobre as Mudanças Climáticas, prevista para ocorrer entre os dias 10 e 21 de novembro de 2025, na cidade de Belém. ${loremText}` },
];

const sidebarData = [
    //{ id: 10, imagem: imgCOP30, alt: "Monitoramento ambiental", tag: "SOFTWARE", titulo: "Aplicativo de monitoramento ambiental ganha destaque.", textoCompleto: `Desenvolvido por jovens talentos, o aplicativo ajuda a monitorar a qualidade do ar em tempo real. ${loremText}` },

    { id: 11, imagem: imgCursoTech, alt: "Tecnologia", tag: "TECNOLOGIA", titulo: "Coletivo irá oferecer curso de Tecnologia para jovens", textoCompleto: `Periferia Tech serão cursos de Tecnologia de forma remota, com os principais tópicos - tecnologia no dia a dia, na atuação profissional e também boas práticas do mercado de trabalho. ${loremText}` },
];


function NoticiasPage() {
  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

  const handleAbrirModal = (noticia) => {
    setNoticiaSelecionada(noticia);
  };

  const handleFecharModal = () => {
    setNoticiaSelecionada(null);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>

        {/* --- SEÇÃO HERO (Topo) --- */}
        <section className={styles.heroSection}>
          <div className={styles.heroGrid}>
            <div className={styles.heroPrincipal}>
              <NoticiaCard {...heroPrincipalData} onClick={() => handleAbrirModal(heroPrincipalData)} />
            </div>
            <div className={styles.heroDireita}>
              {heroDireitaData.map(noticia => (
                <NoticiaCard key={noticia.id} {...noticia} onClick={() => handleAbrirModal(noticia)} />
              ))}
            </div>
          </div>
        </section>

        {/* --- SEÇÃO MAIS LIDAS --- */}
        <section className={styles.secao}>
            <header className={styles.secaoHeader}>
                <h2>Novidades da semana</h2>
                <a href="#">Ver tudo →</a>
            </header>
            <div className={styles.maisLidasGrid}>
                {maisLidasSemanaData.map(noticia => (
                    <NoticiaCard key={noticia.id} {...noticia} onClick={() => handleAbrirModal(noticia)} />
                ))}
            </div>
        </section>

        <hr className={styles.divisor} />

        {/* --- SEÇÃO DE DUAS COLUNAS --- */}
        <div className={styles.layoutGrid}>
          <div className={styles.colunaPrincipal}>
            <section className={styles.secao}>
              <header className={styles.secaoHeader}>
                <h2>Destaques do sobre Educação</h2>
                <a href="#">Ver tudo →</a>
              </header>
              <div className={styles.destaquesLista}>
                {destaquesIaData.map(noticia => (
                   <div key={noticia.id} onClick={() => handleAbrirModal(noticia)}>
                     <div className={styles.cardHorizontal}>
                       <img src={noticia.imagem} alt={noticia.alt} />
                       <div className={styles.cardHorizontalConteudo}>
                         <span>{noticia.tag}</span>
                         <h3>{noticia.titulo}</h3>
                         <p>Clique para ler mais sobre esta incrível notícia e descobrir todos os detalhes do acontecimento...</p>
                       </div>
                     </div>
                   </div>
                ))}
              </div>
            </section>
          </div>

          <aside className={styles.colunaLateral}>
            <div className={styles.cardPromocional}>
              <span>Hello World.</span>
              <h2>Mude de vida através da tecnologia</h2>
              <a href="https://www.cursoemvideo.com" target="_blank" rel="noopener noreferrer">
                CONHEÇA 🚀
              </a>
            </div>
            <section className={styles.secao}>
              <header className={styles.secaoHeader}>
                <h2>CURSOS</h2>
              </header>
              <div className={styles.listaLateral}>
                {sidebarData.map(noticia => (
                   <div key={noticia.id} className={styles.cardLateral} onClick={() => handleAbrirModal(noticia)}>
                    <img src={noticia.imagem} alt={noticia.alt} />
                    <div>
                      <span>{noticia.tag}</span>
                      <p>{noticia.titulo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
      <Footer />

      <NoticiaModal 
        noticia={noticiaSelecionada} 
        onClose={handleFecharModal} 
      />
    </>
  );
}

export default NoticiasPage;