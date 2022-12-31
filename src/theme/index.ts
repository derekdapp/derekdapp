import { ThemeOptions } from "@mui/material/styles/createTheme";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#6ebc8e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#1A1D1D",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h1: {
      fontSize: "3.583rem",
    },
    h2: {
      fontSize: "2.583rem",
    },
    h3: {
      fontSize: "1.583rem",
    },
    h4: {
      fontSize: "1.333rem",
    },
    h5: {
      fontSize: "1.083rem",
    },
    h6: {
      fontSize: "0.833rem",
    },
    body1: {
      fontSize: "1.083rem",
    },
    body2: {
      fontSize: "0.833rem",
    },
  },
};
