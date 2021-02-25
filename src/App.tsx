import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { appTheme } from "./theme";
import { Main } from "./components/Main";
import { AppContextProvider } from "./providers";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </ThemeProvider>
  );
}

export default App;
