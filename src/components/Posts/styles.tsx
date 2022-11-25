import styled from "styled-components";

export const PostContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 48px;
  margin-bottom: 10px;

  > button {
    width: 26rem;
    height: 16.25rem;
    background-color: ${(props) => props.theme["base-post"]};
    border-radius: 10px;
    border: 0;

    padding: 32px;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      h1 {
        font-weight: 700;
        font-size: 1.25rem;
        color: ${(props) => props.theme["base-title"]};
        margin-bottom: 20px;
        margin-right: 16px;
        text-align: left;
      }

      span {
        height: 100%;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }

    > p {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme["base-text"]};
      text-align: left;
    }
  }
`;
