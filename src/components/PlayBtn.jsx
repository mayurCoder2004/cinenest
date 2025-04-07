import React, {useState} from 'react'
import './playBtn.css'
import Modal from './Modal'

const PlayBtn = ({activeMovie}) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  }
  return (
    <>
      <div className={`trailer d-flex align-items-center justify-content-center ${activeMovie ? 'active'  : undefined}`}>
          <a href="#" className="playBtn" onClick={toggleModal}>
              <ion-icon name="play-outline"></ion-icon>
          </a>
          <p>Watch Trailer</p>
      </div>
      {
        activeMovie && <Modal activeMovie={activeMovie} status={modal} toggleModal={toggleModal}/>
      }
    </>
  )
}

export default PlayBtn