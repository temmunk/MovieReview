package dev.temmunk.movies.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    private ObjectId id;
    private String body;
    private int rating;
    private String postedBy;
    private String imdbId;

    public Review(String body, int rating, String imdbId) {
        this.body = body;
        this.rating = rating;
        this.imdbId = imdbId;
    }
}
