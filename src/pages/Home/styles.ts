import styled from "styled-components";

export const Container = styled.main``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  header {
    width: 54rem;
    margin-top: 72px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 1.125rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme["base-span"]};
    }
  }

  > div {
    width: 54rem;
    height: 3.125rem;
    margin-top: 12px;
    padding: 12px 16px;
    border-radius: 6px;

    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid transparent;

    :hover {
      border: 1px solid ${(props) => props.theme["blue"]};
    }

    input {
      width: 100%;
      background-color: ${(props) => props.theme["base-input"]};
      color: ${(props) => props.theme["base-text"]};
      font-size: 1rem;
      border: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    header {
      width: 100%;
      padding: 0 1rem;
    }

    div {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
