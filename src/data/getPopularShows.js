import axios from "axios";

const getPopularShows = async () => {
  const api_key = process.env.REACT_APP_TMDB_API_KEY;

  const res = await axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`
  );

  const data = await res.data;

  return data;
};

export default getPopularShows;
