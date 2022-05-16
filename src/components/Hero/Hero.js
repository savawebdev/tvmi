import styled from "styled-components";
import backgroundImg from "../../assets/images/hero-bg.jpg";
import SearchInput from "./SearchInput";
import Title from "./Title";
import Overlay from "./Overlay";

const StyledHero = styled.div`
  align-items: center;
  background: url(${backgroundImg});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 400px;
  justify-content: center;
  margin-inline: auto;
  max-width: 1200px;
  position: relative;
`;

const Hero = () => {
  return (
    <StyledHero>
      <Overlay />
      <Title>Discover millions of movies and TV Shows.</Title>

      <SearchInput type="text" placeholder="Enter a movie or TV Show" />
    </StyledHero>
  );
};

export default Hero;
