import { useState, useEffect } from "react";
import getPopularMovies from "../data/getPopularMovies";
import getPopularShows from "../data/getPopularShows";
import Hero from "../components/Hero/Hero";
import PopularMovies from "../components/HomePage/PopularMovies";
import PopularShows from "../components/HomePage/PopularShows";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data.results.slice(0, 20));
    });

    getPopularShows().then((data) => {
      setPopularShows(data.results.slice(0, 20));
    });
  }, []);

  return (
    <>
      <Hero />
      <PopularMovies data={popularMovies} />
      <PopularShows data={popularShows} />
    </>
  );
};

export default Home;
