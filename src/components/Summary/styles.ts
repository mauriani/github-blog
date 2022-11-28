import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SummaryCard = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};

  width: 54rem;
  height: 13.25rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  > div {
    padding: 32px 40px 32px 32px;

    display: flex;
    flex-direction: row;

    img {
      width: 9.25rem;
      height: 9.25rem;
      left: 2.5rem;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    div {
      img {
        width: 40%;
        height: 50%;
      }
    }
  }
`;

export const SummaryBio = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 32px;

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

    h1 {
      font-weight: 700;
      font-size: 24px;
      color: ${(props) => props.theme["base-title"]};
      margin-bottom: 8px;
    }

    > button {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: transparent;
      border: 0;

      border-bottom-style: solid;
      border-bottom-width: thin;
      border-color: transparent;

      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme["blue"]};

      width: 67px;
      height: 19px;
      cursor: pointer;

      :hover {
        border-color: ${(props) => props.theme["blue"]};
        border-bottom-style: solid;
        border-bottom-width: thin;
      }

      svg {
        margin-left: 8px;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 24px;
  }

  footer {
    display: flex;
    flex-direction: row;

    button {
      display: flex;
      flex-direction: row;
      align-items: center;

      background: transparent;
      border: 0;

      height: 1.625rem;
      margin-right: 24px;

      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-subtitle"]};

      svg {
        margin-right: 8px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    div {
      display: flex;
      flex-direction: column;
    }

    footer {
      display: flex;
      flex-direction: column;

      > button {
        height: auto;
      }
    }
  }
`;
