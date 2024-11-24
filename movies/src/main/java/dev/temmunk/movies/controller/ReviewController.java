package dev.temmunk.movies.controller;

import dev.temmunk.movies.entity.Review;
import dev.temmunk.movies.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService){
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, Object> payload){

        String body = (String) payload.get("body");
        String imdbId = (String) payload.get("imdbId");
        Integer rating = (Integer) payload.get("rating");

        return new ResponseEntity<>(reviewService.createReview(body, imdbId, rating), HttpStatus.CREATED);

    }

    @GetMapping
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<List<Review>>(reviewService.getAllReviews(), HttpStatus.OK);
    }
}
