import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import api from "../../api/axiosConfig";
import "./Details.css";

const Details = ({ getMovieData, movie, reviews, setReviews }) => {
    const { movieId } = useParams();
    const [rating, setRating] = useState(0);
    const reviewText = useRef();

    useEffect(() => {
        getMovieData(movieId);
    }, [movieId]);

    const addReview = async (e) => {
        e.preventDefault();
        const review = reviewText.current.value;

        if (!reviewText.current.value || rating < 1 || rating > 5) {
            alert("Please provide a valid review and rating between 1 and 5.");
            return;
        }

        try{
            const response = await api.post("/api/v1/reviews", {
                body: review,
                rating: parseInt (rating),
                imdbId: movieId
                
            })

            const updateReviews = [...(reviews || []), response.data]; 
            
            console.log(response.data);
            setReviews(updateReviews);
            reviewText.current.value = "";
            setRating(0);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container className="details-page">
            <Row>
                <Col md={4} className="movie-poster-detail">
                    <img src={movie?.poster} alt={movie?.title} />
                </Col>
                <Col md={8} className="movie-info">
                    <h1>{movie?.title}</h1>
                    <p className="movie-plot">{movie?.plot}</p>
                    <p><strong>Cast:</strong> {movie?.cast?.join(", ")}</p>
                    <p><strong>Genres:</strong> {movie?.genres?.join(", ")}</p>
                    <p><strong>Directors:</strong> {movie?.directors?.join(", ")}</p>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h2>Reviews</h2>
                    <Form onSubmit={addReview} className="review-form">
                        <Form.Group className="mb-3">
                            <Form.Label>Write a Review:</Form.Label>
                            <Form.Control
                                ref={reviewText}
                                as="textarea"
                                rows={3}
                                placeholder="Your review here..."
                                className="review-input"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Rating:</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                placeholder="Rate out of 5"
                                className="rating-input"
                            />
                        </Form.Group>
                        <Button type="submit" variant="primary">
                            Submit
                        </Button>
                    </Form>

                    <div className="reviews-list">
                        {reviews?.map((review, index) => (
                            <div key={index} className="review-card">
                                <p><strong>Review:</strong> {review.body}</p>
                                <p><strong>Rating:</strong> {review.rating} / 5</p>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;
