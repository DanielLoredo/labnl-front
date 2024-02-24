import { ThemeProvider, createTheme } from "@mui/material";
import Signup from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
