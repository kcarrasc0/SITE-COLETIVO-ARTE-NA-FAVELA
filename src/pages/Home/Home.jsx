import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Coletivo from "../../components/Coletivo/Coletivo";
import Atividades from "../../components/Atividades/Atividades";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.blob}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#2A7B9B" />
              <stop offset="100%" stopColor="#57C785" />
            </linearGradient>
          </defs>
          <path d="M26.9,-42.8C30.9,-39.3,27.5,-25.1,28.2,-15.3C28.9,-5.5,33.8,0.1,38.5,9.4C43.2,18.8,47.7,32,42.5,35.6C37.4,39.2,22.7,33.1,9.6,40.6C-3.5,48,-14.9,68.9,-27.1,73.7C-39.2,78.6,-52,67.4,-63.1,54.6C-74.2,41.9,-83.5,27.6,-77.1,16.2C-70.7,4.9,-48.6,-3.6,-39.6,-15.9C-30.5,-28.1,-34.6,-44.1,-30.1,-47.4C-25.7,-50.8,-12.9,-41.5,-0.7,-40.4C11.5,-39.3,22.9,-46.4,26.9,-42.8Z" />
        </svg>
      </div>
      <div className={styles.blob2}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blob2Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#f38c38ff" />
              <stop offset="100%" stopColor="#e63946" />
            </linearGradient>
          </defs>
          <path d="M26.9,-42.8C30.9,-39.3,27.5,-25.1,28.2,-15.3C28.9,-5.5,33.8,0.1,38.5,9.4C43.2,18.8,47.7,32,42.5,35.6C37.4,39.2,22.7,33.1,9.6,40.6C-3.5,48,-14.9,68.9,-27.1,73.7C-39.2,78.6,-52,67.4,-63.1,54.6C-74.2,41.9,-83.5,27.6,-77.1,16.2C-70.7,4.9,-48.6,-3.6,-39.6,-15.9C-30.5,-28.1,-34.6,-44.1,-30.1,-47.4C-25.7,-50.8,-12.9,-41.5,-0.7,-40.4C11.5,-39.3,22.9,-46.4,26.9,-42.8Z" />
        </svg>
      </div>
      <main className={styles.homeContainer}>
        <Carousel />
        <Coletivo />
        <Atividades />
      </main>
      <Footer />
    </div>
  );
};

export default Home;