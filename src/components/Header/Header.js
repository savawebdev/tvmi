import styled from "styled-components";
import Brand from "./Brand";

const StyledHeader = styled.header`
  background-color: var(--clr-blue);
  height: 60px;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  margin-inline: auto;
  max-width: 1200px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Content>
        <Brand>TVMI</Brand>
      </Content>
    </StyledHeader>
  );
};

export default Header;
