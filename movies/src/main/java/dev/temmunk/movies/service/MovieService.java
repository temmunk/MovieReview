package dev.temmunk.movies.service;

import dev.temmunk.movies.entity.Movie;
import dev.temmunk.movies.entity.Review;
import dev.temmunk.movies.repository.MovieRepository;
import dev.temmunk.movies.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private MovieRepository movieRepository;
    private ReviewRepository reviewRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository, ReviewRepository reviewRepository) {
        this.movieRepository = movieRepository;
        this.reviewRepository = reviewRepository;
    }

    public List<Movie> getAllMovies() {
        List<Movie> movies = movieRepository.findAll();

        // Populate reviews for each movie
        for (Movie movie : movies) {
            List<Review> reviews = reviewRepository.findByImdbId(movie.getImdbId());
            movie.setReviewIds(reviews); // Set the fetched reviews
        }

        return movies;
    }

    public Optional<Movie> getMovieByImdbId(String imdbId) {
        Optional<Movie> movie = movieRepository.findByImdbId(imdbId);

        // Fetch reviews by imdbId
        movie.ifPresent(m -> {
            List<Review> reviews = reviewRepository.findByImdbId(imdbId);
            m.setReviewIds(reviews); // Update the movie's reviews
        });

        return movie;
    }

}
