import { ThemeProvider } from "@mui/material";
import React from "react";
import { StoreContextProvider } from "./context";
import Router from "./router";
import { Theme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StoreContextProvider>
        <Router />
      </StoreContextProvider>
    </ThemeProvider>
  );
};

export default App;
