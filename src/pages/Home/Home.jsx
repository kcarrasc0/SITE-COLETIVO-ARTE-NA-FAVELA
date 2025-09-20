import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Coletivo from "../../components/Coletivo/Coletivo";
import Atividades from "../../components/Atividades/Atividades";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css"; // 1. IMPORTE OS ESTILOS AQUI

const Home = () => {
  return (
    <>
      <Header />
      {/* 2. APLIQUE A CLASSE AO MAIN */}
      <main className={styles.homeContainer}>
        <Carousel />
        <Coletivo />
        <Atividades />
      </main>
      <Footer />
    </>
  );
};

export default Home;