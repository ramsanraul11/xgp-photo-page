import { CssBaseline, ThemeProvider } from "@mui/material";
import { Analytics } from '@vercel/analytics/react';
import AppRouter from "./routes/AppRouter";
import { theme } from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
      {/* TODO: Mirar por que no traza en Vercel.com */}
      <Analytics />
    </ThemeProvider>
  );
}
