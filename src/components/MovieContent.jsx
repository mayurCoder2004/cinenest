import React from 'react'
import './movieContent.css'
import titleImg from '../images/transformer-title.png'
import Button from './Button'

const MovieContent = ({activeMovie}) => {
  return (
    <div className={`content ${activeMovie ? 'active' : undefined}`}>
        <img src={activeMovie.titleImg} alt="Movie Title" className="movie-title" />
        <h4><span>{activeMovie.year}</span>
            <span><i>{activeMovie.ageLimit}</i></span>
            <span>{activeMovie.length}</span>
            <span>{activeMovie.category}</span>
        </h4>
        <p>{activeMovie.description}</p>
        <div className="button">
            <Button icon={<ion-icon name="bookmark-outline"></ion-icon>} name='Book' color='#ff3700' bgColor='#ffffff'/>
            <Button icon={<ion-icon name="add-outline"></ion-icon>} name='My List' color='#ff3700' bgColor='#ffffff'/>
        </div>
    </div>
  )
}

export default MovieContent