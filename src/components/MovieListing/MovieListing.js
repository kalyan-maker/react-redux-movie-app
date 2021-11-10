import React from "react";
import { useSelector } from "react-redux";
import "./MovieListing-styles.css";
import { getAllMovies, getAllShows } from "../../redux/Movies/MovieReducer";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let Movies,
    TvShows = "";

  Movies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  TvShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{Movies}</div>
      </div>
      <div className="show-list">
        <h2>TvShows</h2>
        <div className="movie-container">{TvShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
