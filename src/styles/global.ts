import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:focus {
  outline:0;
  box-shadow: 0 0 0 2px ${(props) => props.theme["base-border"]}; 
}

body {
  background-color:${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-text"]};
  --webkit-font-smoothing:antialiased;
}



body, input, textarea, button {
  font: 400 1rem Nunito, sans-serif;
}

html {
  // quando o meu usuário estiver com uma tela
  @media(max-width:1080px){
    font-size: 93.75%; // isso resulta em 15px
  }
  @media (max-width: 720px){
    font-size: 87.5%; // isso resulta em 14px
  }
}
`;
