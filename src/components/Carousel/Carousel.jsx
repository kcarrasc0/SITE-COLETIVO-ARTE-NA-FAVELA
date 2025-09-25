import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

const AUTOPLAY_MS = 4000;

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, AUTOPLAY_MS);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i) => {
    stop();
    setCurrent((i + images.length) % images.length);
    start();
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    start();
    return stop;
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Galeria de imagens"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      <img
        key={images[current]}          
        src={images[current]}
        alt={`Slide ${current + 1} de ${images.length}`}
      />

      <button
        type="button"
        className={`${styles["nav-btn"]} ${styles.prev}`}
        aria-label="Anterior"
        onClick={prev}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
          <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        type="button"
        className={`${styles["nav-btn"]} ${styles.next}`}
        aria-label="Próximo"
        onClick={next}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 7L15 12L10 17" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={styles.dots} role="tablist" aria-label="Seleção de slides">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`${styles.dot} ${index === current ? styles.active : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;