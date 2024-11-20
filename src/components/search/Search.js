import React from "react";
import "./Search.css"; 
import { useNavigate } from "react-router-dom";

const Search = ({ movies }) => {

    const navigate = useNavigate();
    function details(movieId){
        navigate(`/Details/${movieId}`);
    }
    return (
        <div className="search-results">
            <h3>Search Results</h3>
            <div className="search-results-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.imdbId} className="search-results-card">
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                className="search-results-poster"
                            />
                            <h5 className="search-results-title">{movie.title}</h5>
                            <button
                                className="btn btn-primary"
                                onClick={() => details(movie.imdbId)}
                            >
                                Details
                            </button>
                        </div>
                    ))
                ) : (
                    <h4 className="no-results">No movies found.</h4>
                )}
            </div>
        </div>
    );
};

export default Search;
