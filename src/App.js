import { ThemeProvider, createTheme } from "@mui/material";
import Signup from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Credencial from "./Pages/Credencial";
import Tablero from "./Pages/Tablero";
import Seleccion from "./Pages/Seleccion";
import ScanUserField from "./Pages/ScanUserField";

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
        <Route path="/tablero" element={<Tablero />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/lectorCodigo" element={<ScanUserField />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
