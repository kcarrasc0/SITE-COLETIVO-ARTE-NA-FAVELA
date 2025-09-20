import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide3.JPG",
  "/images/slide4.jpg",
  "/images/slide5.jpg",
  "/images/slide6.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // troca a cada 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <img src={images[current]} alt={`Slide ${current + 1}`} />
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === current ? styles.active : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
