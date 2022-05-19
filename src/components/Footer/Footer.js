import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  align-items: center;
  background-color: var(--clr-blue);
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 300px;
  justify-content: center;
  margin-top: 100px;
`;

const Copyright = styled.span`
  color: var(--clr-white);
  font-size: 1.5rem;
  font-weight: bold;
`;

const TMDB = styled.span`
  color: var(--clr-lightgreen);
  font-size: 1.3rem;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: var(--clr-red);
  text-decoration: none;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>2022 &copy; Andrei Sava</Copyright>
      <TMDB>
        Thanks to <StyledLink to="https://www.themoviedb.org/">TMDB</StyledLink>{" "}
        for the data
      </TMDB>
    </StyledFooter>
  );
};

export default Footer;
