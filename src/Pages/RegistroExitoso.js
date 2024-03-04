import { Grid, LinearProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RegistroExitoso() {
  const navigate = useNavigate();
  const location = useLocation();

  const registro = useRef(location.state);
  const [ticking, setTicking] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) {
        setCount(count + 1);
        if (count === 20) {
          setTicking(false);
          navigate("/tablero");
        }
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [count, ticking]);

  return (
    <Grid
      container
      flexDirection="column"
      width="100%"
      minHeight="100vh"
      position="relative"
      backgroundColor="#fcfcfc"
      padding="1rem"
      overflow="hidden"
    >
      <Grid
        style={{
          backgroundColor: "rgba(252, 212, 52, 0.7)",
          width: "25rem",
          height: "25rem",
          boxShadow: "0 0 20rem 1rem rgba(252, 224, 112, 1)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "-10rem",
          left: "-10rem",
          zIndex: "0",
        }}
      ></Grid>
      <Grid
        style={{
          backgroundColor: "rgba(252, 212, 52, 0.7)",
          width: "15rem",
          height: "15rem",
          boxShadow: "0 0 20rem 1rem rgba(252, 224, 112, 1)",
          borderRadius: "50%",
          position: "absolute",
          bottom: "-6rem",
          right: "-6rem",
          zIndex: "2",
        }}
      ></Grid>
      <Grid item container alignItems="center" flexDirection="column">
        <Grid
          item
          container
          alignItems="flex-end"
          backgroundColor="rgba(252, 212, 52, 0.7)"
          borderRadius="2rem"
          boxShadow="0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)"
          justifyContent="center"
          width="auto"
        >
          <Grid item fontSize="4rem" fontWeight="700" padding="1rem 2rem">
            Bienvienido!
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="flex-end"
          backgroundColor="rgba(255,255,255,255.7)"
          borderRadius="2rem"
          boxShadow="0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)"
          justifyContent="center"
          marginTop="1rem"
          width="auto"
        >
          <Grid item container padding="1rem 2rem" flexDirection="column">
            <Grid item fontSize="4rem" fontWeight="700">
              Registro existoso
            </Grid>
            <Grid item fontSize="3rem" fontWeight="500">
              <Grid>Nombre: {registro.current.nombre}</Grid>
              <Grid>
                Fecha: {registro.current.fechaAcceso.substring(0, 10)}
              </Grid>
              <Grid>
                Hora: {registro.current.fechaAcceso.substring(11, 16)}
              </Grid>

              <Grid>Actividad: {registro.current.actividad}</Grid>
              <Grid paddingTop="1rem" fontSize="1rem" color="rgba(0,0,0,0.5)">
                <LinearProgress
                  variant="determinate"
                  value={count * 5}
                  color="success"
                />
                Regresando al inicio...
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default RegistroExitoso;
