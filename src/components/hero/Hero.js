import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link,useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import Search from '../search/Search'

const Hero = ({movies}) => {
    const [search, setSearch] = useState("");

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );


    const navigate = useNavigate();
    function details(movieId){
        navigate(`/Details/${movieId}`);
    }

    

  return (
    <div>
        <div className='search-container'>
                    <input className='search-input'
                        type="text"
                        placeholder="Search for a movie..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
        </div>
        <Carousel>
            {
                movies.map((movie) => (
                    <Paper key={movie.imdbId}>
                        <div className='movie-card-container'>
                            <div className='movie-card' style = {{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className='movie-detail'>
                                    
                                    <div className='movie-title'>
                                        <h2>{movie.title}</h2>
                                    </div>
                                    <div className='movie-poster'>
                                        <img src={movie.poster} alt={movie.title} />
                                    </div>
                                    <div className='movie-description'>
                                        <h4>{movie.plot}</h4>
                                    </div>
                                    <div className='movie-buttons-container'>
                                        <Link to={`/Trailer/${movie.trailer.substring(movie.trailer.length - 11)}`}>
                                            <div className='play-button-icon-container'>
                                                <FontAwesomeIcon className='play-button-icon' icon={faCirclePlay} />
                                            </div>
                                        </Link>
                                        <div className='movie-detail-button-container'>
                                            <Button variant="info" onClick={() => details(movie.imdbId)}>
                                                Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </Paper>))
            }
        </Carousel>
        {search && <Search movies={filteredMovies} />}
    </div>
  )
}

export default Hero