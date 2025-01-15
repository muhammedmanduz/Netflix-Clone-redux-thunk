import React from "react";
import Hero from "./Hero";
import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import MovieList from "./MovieList";

const Home = () => {
  const { genres, isLoading, error } = useSelector((store) => store.genres);

  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        genres &&
        genres.map((category) => (
          <MovieList key={category.id} genre={category} />
        ))
      )}
    </div>
  );
};

export default Home;
