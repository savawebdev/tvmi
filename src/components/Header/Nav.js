import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: var(--clr-white);
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: var(--transition-primary);

  :hover {
    color: var(--clr-lightgreen);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
      <StyledLink to="/tvshows">TV Shows</StyledLink>
    </StyledNav>
  );
};

export default Nav;
