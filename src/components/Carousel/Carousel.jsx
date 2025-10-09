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
  const timerRef = useRef(null);
  const stageRef = useRef(null);

  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef(null);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setCurrent(prevCurrent => (prevCurrent + 1) % images.length);
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

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleTouchStart = (e) => handleDragStart(e.touches[0].clientX);
    const handleTouchMove = (e) => handleDragMove(e.touches[0].clientX);
    const handleMouseDown = (e) => handleDragStart(e.clientX);
    const handleMouseMove = (e) => handleDragMove(e.clientX);
    
    stage.addEventListener("mousedown", handleMouseDown);
    stage.addEventListener("touchstart", handleTouchStart, { passive: true });
    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("touchmove", handleTouchMove, { passive: true });
    
    const handleDragEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      
      const movedBy = currentTranslate.current - prevTranslate.current;
      
      if (movedBy < -50) {
        next();
      } else if (movedBy > 50) {
        prev();
      } else {
        setPositionByIndex();
      }
      stage.classList.remove(styles.isDragging);
      start();
    };

    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchend", handleDragEnd);
    window.addEventListener("mouseleave", handleDragEnd);

    return () => {
      stage.removeEventListener("mousedown", handleMouseDown);
      stage.removeEventListener("touchstart", handleTouchStart);
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchend", handleDragEnd);
      window.removeEventListener("mouseleave", handleDragEnd);
      cancelAnimationFrame(animationRef.current);
    };
  }, [current]);

  const handleDragStart = (clientX) => {
    stop();
    isDragging.current = true;
    startPos.current = clientX;
    prevTranslate.current = -current * stageRef.current.offsetWidth;
    stageRef.current.classList.add(styles.isDragging);
    animationRef.current = requestAnimationFrame(animationLoop);
  };
  
  const handleDragMove = (clientX) => {
    if (!isDragging.current) return;
    const currentPosition = clientX;
    currentTranslate.current = prevTranslate.current + currentPosition - startPos.current;
  };
  
  const setPositionByIndex = () => {
    currentTranslate.current = -current * stageRef.current.offsetWidth;
    prevTranslate.current = currentTranslate.current;
    setStagePosition();
  };

  const animationLoop = () => {
    setStagePosition();
    if (isDragging.current) requestAnimationFrame(animationLoop);
  };

  const setStagePosition = () => {
    stageRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };
  
  useEffect(() => {
    if (!isDragging.current && stageRef.current) {
        setPositionByIndex();
    }
  }, [current]);


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
    >
      <div
        ref={stageRef}
        className={styles.stage}
        aria-live="polite"
      >
        {images.map((src, i) => (
          <div key={i} className={styles.slideContainer}>
            <img
              src={src}
              alt={`Slide ${i + 1} de ${images.length}`}
              className={styles.slide}
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      <button type="button" className={`${styles.navBtn} ${styles.prev}`} aria-label="Anterior" onClick={prev}>
        <svg viewBox="0 0 24 24" fill="none" style={{ transform: "rotate(180deg)" }}>
          <path d="M10 7L15 12L10 17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button type="button" className={`${styles.navBtn} ${styles.next}`} aria-label="Próximo" onClick={next}>
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