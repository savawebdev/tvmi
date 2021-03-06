import styled from "styled-components";
import HomeGrid from "./HomeGrid";
import HomeMovieCard from "./HomeMovieCard";
import HomeSection from "./HomeSection";
import SectionTitle from "./SectionTitle";

const PopularShows = ({ data }) => {
  return (
    <HomeSection>
      <SectionTitle>Popular Shows</SectionTitle>
      <HomeGrid>
        {data.map((show) => (
          <HomeMovieCard key={show.id} data={show} />
        ))}
      </HomeGrid>
    </HomeSection>
  );
};

export default PopularShows;
