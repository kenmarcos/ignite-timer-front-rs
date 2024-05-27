import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./types/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { CyclesContextProvider } from "./contexts/CyclesContext";
import { CountdownContextProvider } from "./contexts/CountdownContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CyclesContextProvider>
          <CountdownContextProvider>
            <Router />
          </CountdownContextProvider>
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
