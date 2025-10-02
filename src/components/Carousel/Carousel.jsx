"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/assets/images/slide/slide1.jpg",
  "/assets/images/slide/slide2.jpg",
  "/assets/images/slide/slide3.jpg",
  "/assets/images/slide/slide4.jpg",
  "/assets/images/slide/slide5.jpg",
];

const AUTOPLAY_MS = 4000;

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(() => images.map((_, i) => i === 0));
  const timerRef = useRef(null);

  // Pré-carrega imagens para evitar flash
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.decoding = "async";
      img.onload = () =>
        setLoaded(prev => (prev[i] ? prev : prev.map((v, idx) => (idx === i ? true : v))));
    });
  }, []);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % images.length);
    }, AUTOPLAY_MS);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i) => {
    const idx = (i + images.length) % images.length;
    setCurrent(idx);
    stop();
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
      <div className={styles.stage} aria-live="polite">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${i + 1} de ${images.length}`}
            className={[
              styles.slide,
              i === current ? styles.active : "",
              loaded[i] ? styles.loaded : styles.notLoaded,
            ].join(" ")}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        ))}
      </div>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.prev}`}
        aria-label="Anterior"
        onClick={prev}
      >
        <svg viewBox="0 0 24 24" fill="none" style={{ transform: "rotate(180deg)" }}>
          <path d="M10 7L15 12L10 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        type="button"
        className={`${styles.navBtn} ${styles.next}`}
        aria-label="Próximo"
        onClick={next}
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M10 7L15 12L10 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            className={`${styles.dot} ${index === current ? styles.activeDot : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}