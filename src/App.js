import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./Pages/Login";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, monospace",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
