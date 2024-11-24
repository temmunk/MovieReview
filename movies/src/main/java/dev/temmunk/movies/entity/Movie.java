package dev.temmunk.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "Movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private ObjectId id;
    private String title;
    private String imdbId;
    private int year;
    private String trailer;
    private String plot;
    private String poster;
    private String fullplot;
    private String rated;
    private List<String> cast;
    private List<String> backdrops;
    private List<String> genres;
    private List<String> directors;
    @DocumentReference
    private List<Review> reviewIds;
}
