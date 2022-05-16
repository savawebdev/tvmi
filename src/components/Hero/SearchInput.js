import styled from "styled-components";

const SearchInput = styled.input`
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  height: 50px;
  padding-inline: 20px;
  position: relative;
  width: 60%;
  z-index: 10;

  :focus {
    outline: none;
  }
`;

export default SearchInput;
