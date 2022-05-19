import Hero from "../components/Hero/Hero";
import PopularMovies from "../components/HomePage/PopularMovies";
import PopularShows from "../components/HomePage/PopularShows";

const Home = ({ movies, shows }) => {
  return (
    <>
      <Hero />
      <PopularMovies data={movies} />
      <PopularShows data={shows} />
    </>
  );
};

export default Home;
