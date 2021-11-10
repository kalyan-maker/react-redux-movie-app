import React, { useEffect } from "react";
import "./Home-styles.css";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/Movies/MovieReducer";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div className="Home">
      <MovieListing />
    </div>
  );
};

export default Home;
