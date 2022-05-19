import styled from "styled-components";
import HomeGrid from "./HomeGrid";
import HomeMovieCard from "./HomeMovieCard";
import HomeSection from "./HomeSection";
import SectionTitle from "./SectionTitle";

const PopularMovies = ({ data }) => {
  return (
    <HomeSection>
      <SectionTitle>Popular Movies</SectionTitle>
      <HomeGrid>
        {data.map((movie) => (
          <HomeMovieCard key={movie.id} data={movie} />
        ))}
      </HomeGrid>
    </HomeSection>
  );
};

export default PopularMovies;
