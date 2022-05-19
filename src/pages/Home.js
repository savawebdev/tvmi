import { useState, useEffect } from "react";
import getPopularMovies from "../data/getPopularMovies";
import getPopularShows from "../data/getPopularShows";
import Hero from "../components/Hero/Hero";
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
      <PopularShows data={popularMovies} />
    </>
  );
};

export default Home;
