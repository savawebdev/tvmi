import axios from "axios";

const getPopularMovies = async () => {
  const api_key = process.env.REACT_APP_TMDB_API_KEY;

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );

  const data = await res.data;

  return data;
};

export default getPopularMovies;
