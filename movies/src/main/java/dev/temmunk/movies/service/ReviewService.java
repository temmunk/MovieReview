package dev.temmunk.movies.service;

import dev.temmunk.movies.entity.Review;
import dev.temmunk.movies.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


    public Review createReview(String body, String imdbId, Integer rating){
        Review review = new Review(body,rating, imdbId);

        return reviewRepository.save(review);
    }
    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }
}
