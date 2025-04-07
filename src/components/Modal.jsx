import React from 'react';
import './modal.css';

const Modal = ({ activeMovie, status, toggleModal }) => {
  if (!status) return null; // Don't render modal at all if not active

  return (
    <div className="movieModal active">
      <a href="#" className="modalClose" onClick={toggleModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        src={activeMovie.video}
        title={`${activeMovie.title} | Official Trailer`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Modal;
