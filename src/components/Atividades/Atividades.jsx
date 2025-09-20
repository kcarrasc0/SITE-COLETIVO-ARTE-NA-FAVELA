import React from "react";
import styles from "./Atividades.module.css";

const atividades = [
  {
    titulo: "Comunicação Ambiental",
    descricao: "Capacitação de jovens de 13 a 29 anos para se tornarem comunicadores e agentes de mudança em suas comunidades. Com foco em três eixos — Mudanças Climáticas, Saúde e Tecnologia.",
    imagem: "/images/atividade1.jpg"
  },
  {
    titulo: "Batalha Cultural",
    descricao: "A Batalha Cultual dá voz, movimento e identidade à juventude negra e periférica. Tornando a rima um instrumento de debate e concientização O evento, que ocorre todas às quartas-feiras nas praças da comunidade do Ibura.",
    imagem: "/images/atividade2.jpg"
  },
  {
    titulo: "Break nas Escolas",
    descricao: "Levamos a arte do break para escolas da periferia, mas também a história e os valores do hip-hop  como forma de empoderamento e superação de preconceitos. As atividades culminam em uma oficina de grafite, unindo esses dois elementos marcantes.",
    imagem: "/images/atividade3.jpg"
  },
  {
    titulo: "Cine Ibura",
    descricao: "O Cine Ibura é o nosso cineclube comunitário. O projeto promove exibições de filmes, documentários e produções audiovisuais que estimulam o debate sobre questões sociais, culturais e ambientais, contendo também o Slan de poesia.",
    imagem: "/images/atividade4.jpg"
  },
  {
    titulo: "Resenha IB",
    descricao: "É um projeto voltado ao fortalecimento de MCs e artistas da cena hip-hop local. A iniciativa oferece uma estrutura para a gravação de músicas autorais.",
    imagem: "/images/atividade5.png"
  },
    {
    titulo: "Periferia Tech",
    descricao: "Oferecemos cursos de Tecnologia de forma remota, tecnolohgia no dia a dia, na atuação profissional e também ensinamos boas práticas do mercado de trabalho.",
    imagem: "/images/atividade6.JPG"
  },
     {
    titulo: "EcoVision",
    descricao: "Web App de monitoramento ambiental criado nas aulas de Tecnologia do Comunicação Ambiental, para acompanhar dados de desmatamento.",
    imagem: "/images/atividade7.png"
  }
  
];

const Atividades = () => {
  return (
    <section id="atividades" className={styles.section}>
      <h2>Nossas <span>Atividades</span></h2>
      <div className={styles.grid}>
        {atividades.map((a, i) => (
          <div key={i} className={styles.card}>
            <img src={a.imagem} alt={a.titulo} />
            <h3>{a.titulo}</h3>
            <p>{a.descricao}</p>
            <a href="/atividades" className="btn">Saiba Mais</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Atividades;
