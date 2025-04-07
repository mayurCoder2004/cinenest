import React, {useState, useEffect} from 'react'
import './banner.css'
import bgImg from '../images/bg-transformer.jpg'
import MovieContent from '../components/MovieContent'
import MovieDate from '../components/MovieDate'
import PlayBtn from '../components/PlayBtn'
import MovieSwiper from '../components/MovieSwiper'
import '../components/movieSwiper.css'


const Banner = () => {
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    fetch('http://localhost:3000/data/movieData.json')
    .then((response=>response.json()))
    .then((data) => {
      setMovies(data) 
    })
    .catch((error) => {
      console.log(error.message)
    })
  };

  useEffect(() => {
    fetchMovies()
  }, []);

  const handleSlideChange = id => {
    const newMovie = movies.map(movie => {
      movie.active = false;
      if (movie._id===id){
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovie);
  }

  const activeMovie = movies.find(movie => movie.active);
  return (
    <div className='banner'>
        {activeMovie && (
          <div className="movie" key={activeMovie.id}>
            <img src={activeMovie.bgImg} alt="background" className="bgImg active" />
            <div className="container-fluid">
              <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                <div className="movie-left">
                  <MovieContent activeMovie={activeMovie} />
                </div>
                <div className="movie-right">
                  <MovieDate activeMovie={activeMovie} />
                  <PlayBtn activeMovie={activeMovie} />
                </div>
              </div>
            </div>
          </div>
        )}

        {
        movies && movies.length > 0 && (
          <MovieSwiper slides={movies} slideChange={handleSlideChange}/>
        )
      }
    </div>
  )
}

export default Banner 