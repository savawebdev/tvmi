import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import getPopularMovies from "./data/getPopularMovies";
import getPopularShows from "./data/getPopularShows";
import Footer from "./components/Footer/Footer";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });

    getPopularShows().then((data) => {
      setPopularShows(data.results);
    });
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={popularMovies.slice(0, 20)}
              shows={popularShows.slice(0, 20)}
            />
          }
        />
        <Route path="/movies" element={<Movies data={popularMovies} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
