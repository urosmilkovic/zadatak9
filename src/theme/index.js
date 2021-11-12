import { createTheme } from "@mui/material";

export const Theme = createTheme({
  palette: {
    primary: {
      light: "#6949b6",
      main: "#5e41a2",
      dark: "#543a91",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#59a9d2",
      main: "#47a0ce",
      dark: "#3493c4",
      contrastText: "#ffffff",
    },
    tertiary: {
      light: "#ad40b3",
      main: "#99399e",
      dark: "#89338e",
      contrastText: "#ffffff",
    },
    default: {
      light: "#edf0f2",
      main: "#eceff1",
      dark: "#d0d7dc",
      contrastText: "#000000",
    },
  },
});
