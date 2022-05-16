import styled from "styled-components";
import Brand from "./Brand";
import Button from "./Button";
import Nav from "./Nav";
import UserAuth from "./UserAuth";

const StyledHeader = styled.header`
  background-color: var(--clr-blue);
  height: 60px;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin-inline: auto;
  max-width: 1200px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Content>
        <Brand>TVMI</Brand>

        <Nav />

        <UserAuth>
          <Button to="/login">Login</Button>
          <Button to="/join">Join</Button>
        </UserAuth>
      </Content>
    </StyledHeader>
  );
};

export default Header;
