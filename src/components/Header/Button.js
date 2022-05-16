import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  align-items: center;
  background: none;
  border: 2px solid var(--clr-lightgreen);
  border-radius: 10px;
  color: var(--clr-lightgreen);
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 40px;
  justify-content: center;
  text-decoration: none;
  transition: var(--transition-primary);
  width: 100px;

  :hover {
    background: var(--clr-lightgreen);
    color: var(--clr-blue);
  }
`;

export default Button;
