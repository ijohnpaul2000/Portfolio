import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: entrance 1s;

  @keyframes entrance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 40px;

  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;
