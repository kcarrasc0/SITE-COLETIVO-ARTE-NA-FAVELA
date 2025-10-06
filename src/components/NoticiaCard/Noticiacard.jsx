import React from 'react';
import styles from './NoticiaCard.module.css';

function NoticiaCard({ imagem, alt, tag, titulo, onClick }) {
  return (
    <article className={styles.card} onClick={onClick}>
      <img src={imagem} alt={alt} />
      <div className={styles.overlay}>
        {tag && <span className={styles.tag}>{tag}</span>}
        <h3>{titulo}</h3>
      </div>
    </article>
  );
}

export default NoticiaCard;