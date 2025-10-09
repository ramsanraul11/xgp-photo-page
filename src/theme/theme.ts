import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF6F00", // naranja KTM
    },
    secondary: {
      main: "#FF9100",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "'Roboto Condensed', 'Roboto', sans-serif",
    h4: {
      fontWeight: 700,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      color: "#B0B0B0",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0D0D0D",
          borderBottom: "2px solid #FF6F00",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          fontWeight: 600,
          borderRadius: 0,
        },
      },
    },
  },
});
