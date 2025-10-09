import { Link } from "react-router-dom";
import styles from "./Atividades.module.css";
import { InfoIcon } from "../Header/Icons";

const atividades = [
  {
    titulo: "Comunicação Ambiental",
    descricao: "Capacitação de jovens para se tornarem comunicadores e agentes de mudança, com foco em Clima, Saúde e Tecnologia.",
    imagem: "../../assets/images/atividade/atividade1.jpg"
  },
  {
    titulo: "Batalha Cultural",
    descricao: "A Batalha Cultural dá voz e identidade à juventude, tornando a rima um instrumento de debate e conscientização no Ibura.",
    imagem: "../../assets/images/atividade/atividade2.jpg"
  },
  {
    titulo: "Break nas Escolas",
    descricao: "Levamos a arte do break e os valores do hip-hop para escolas da periferia como forma de empoderamento e superação.",
    imagem: "../../assets/images/atividade/atividade3.jpg"
  },
  {
    titulo: "Cine Ibura",
    descricao: "Nosso cineclube comunitário que promove exibições e debates sobre questões sociais, culturais e ambientais.",
    imagem: "../../assets/images/atividade/atividade4.jpg"
  },
  
];

const atividades2 = [
  {
    titulo: "Resenha IB",
    descricao: "Um projeto voltado ao fortalecimento de MCs e artistas da cena hip-hop local, oferecendo estrutura para gravação de músicas.",
    imagem: "../../assets/images/atividade/atividade5.png"
  },
  {
    titulo: "Periferia Tech",
    descricao: "Oferecemos cursos de tecnologia de forma remota, ensinando boas práticas do mercado de trabalho para o dia a dia.",
    imagem: "../../assets/images/atividade/atividade6.jpg"
  },
  {
    titulo: "EcoVision",
    descricao: "Web App de monitoramento ambiental criado nas aulas de Tecnologia para acompanhar dados de desmatamento.",
    imagem: "../../assets/images/atividade/atividade7.png"
  }
]


const Atividades = () => {
  return (
    <section id="atividades" className={styles.section}>
      <h2>
        Nossas <span>Atividades</span>
      </h2>
      <div className={styles.grid}>
        {atividades.map((atividade, index) => (
          <div key={index} className={styles.card}>
            <img src={atividade.imagem} alt={atividade.titulo} />
            <h3>{atividade.titulo}</h3>
            <p>{atividade.descricao}</p>
            <Link to="/atividades" className={styles.btn}>
              <InfoIcon />
              Saiba Mais
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.grid2}>
        {atividades2.map((atividade, index) => (
          <div key={index} className={styles.card2}>
            <img src={atividade.imagem} alt={atividade.titulo} />
            <h3>{atividade.titulo}</h3>
            <p>{atividade.descricao}</p>
            <Link to="/atividades" className={styles.btn}>
              <InfoIcon />
              Saiba Mais
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Atividades;