import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export const ProjectLink = styled(LinkR)`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  color: #ba5a31;
  margin: 50px 0;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: scale(1.04, 1.04);
  }
`;
