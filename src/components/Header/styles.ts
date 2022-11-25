import styled from "styled-components";

import BackgroundImage from "../../assets/Cover.png";

export const Container = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${BackgroundImage}) no-repeat top center;
  // background-size: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
