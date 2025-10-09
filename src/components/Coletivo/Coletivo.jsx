import React from "react";
import styles from "./Coletivo.module.css";
import coletivoImg from "../../assets/images/o-coletivo.jpg";

const Coletivo = () => {
  return (
    <section id="coletivo" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={coletivoImg}
            alt="Membros do Coletivo Arte na Favela reunidos"
            className={styles.image}
          />
        </div>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>
            O <span>Coletivo</span>
          </h2>
          <p className={styles.paragraph}>
            O <strong>Coletivo Arte na Favela</strong> é uma iniciativa
            sociocultural dedicada a fortalecer jovens periféricos, na faixa
            etária de 13 a 29 anos, por meio de encontros e atividades que
            integram cultura, educação, tecnologia, saúde e desenvolvimento
            social.
          </p>
          <p className={styles.paragraph}>
            Fundado em <strong>6 de novembro de 2024</strong>, o coletivo tem
            como missão formar novas lideranças e disseminar conhecimento sobre
            temas urgentes como mudanças climáticas, vivências dos povos
            tradicionais e originários, saúde, combate ao preconceito e
            inovação. Utilizamos a arte em suas diversas formas — poesia,
            batalhas de rima, cinema, dança e comunicação — como principal
            ferramenta de transformação social.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Coletivo;