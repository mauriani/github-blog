import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Routes";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
