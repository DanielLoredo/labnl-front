import { ThemeProvider, createTheme } from "@mui/material";
import Signup from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Credencial from "./Pages/Credencial";

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
        <Route path="/credencial" element={<Credencial />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
