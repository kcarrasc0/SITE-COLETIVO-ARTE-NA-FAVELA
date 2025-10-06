import React from 'react';
import styles from './NoticiaModal.module.css';

function NoticiaModal({ noticia, onClose }) {
  if (!noticia) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <img src={noticia.imagem} alt={noticia.alt} className={styles.modalImage} />
        <div className={styles.modalBody}>
          <span className={styles.modalTag}>{noticia.tag}</span>
          <h2 className={styles.modalTitle}>{noticia.titulo}</h2>
          <p className={styles.modalText}>{noticia.textoCompleto}</p>
        </div>
      </div>
    </div>
  );
}

export default NoticiaModal;