import styled from "styled-components";

const HomeGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  overflow-x: scroll;
  padding-bottom: 50px;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--clr-lightgreen);
    border-radius: 20px;
    width: 200px;
  }
`;

export default HomeGrid;
