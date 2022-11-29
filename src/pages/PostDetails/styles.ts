import styled from "styled-components";

export const Container = styled.main``;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -5rem;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;

export const SummaryCard = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};

  width: 54rem;
  height: 11rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  padding: 32px;

  div {
    display: flex;
    flex-direction: row;

    justify-content: space-between;

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

      width: auto;
      height: auto;
      cursor: pointer;

      :hover {
        border-color: ${(props) => props.theme["blue"]};
        border-bottom-style: solid;
        border-bottom-width: thin;
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme["base-title"]};
    margin-top: 20px;
  }

  footer {
    display: flex;
    flex-direction: row;
    margin-top: 8px;

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
    height: auto;

    footer {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export const ContentPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostParagraph = styled.footer`
  width: 864px;

  padding: 40px 32px;

  h1 {
    margin-bottom: 8px;
  }

  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    margin-bottom: 8px;
    color: ${(props) => props.theme["base-text"]};
  }

  code {
    display: block;
    white-space: pre-wrap;
    background: ${(props) => props.theme["base-post"]};
    border-radius: 2px;
    width: 100%;

    padding: 16px;

    margin-top: 24px;

    font-family: "Fira Code";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }

  ul {
    margin-top: 1em;
    margin-bottom: 1em;
    list-style: disc outside none;
  }

  ul li {
    margin-left: 2em;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  a {
    color: ${(props) => props.theme["blue"]};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;
