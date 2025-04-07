import React from 'react'
import './movieDate.css'

const MovieDate = ({activeMovie}) => {
  return (
    <div className={`date ${activeMovie ? 'active' : undefined}`}>
        <h2>On {activeMovie.date}</h2>
    </div>
  )
}

export default MovieDate