import { Grid } from "@mui/material";
import EdificioImagen from "../assets/edificio.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Seleccion() {
  const location = useLocation();
  const [registro, setRegistro] = useState(
    location.state ? location.state : ""
  );

  return (
    <>
      <Grid
        container
        width="100%"
        minHeight="100vh"
        position="relative"
        backgroundColor="#fcfcfc"
        padding="2rem"
        overflow="hidden"
      >
        {`Hola: ${registro.nombre}`}
        <Grid
          style={{
            backgroundColor: "rgba(252, 212, 52, 0.7)",
            width: "15rem",
            height: "15rem",
            boxShadow: "0 0 20rem 1rem rgba(252, 224, 112, 1)",
            borderRadius: "50%",
            position: "absolute",
            top: "-6rem",
            right: "-6rem",
            zIndex: "3",
          }}
        ></Grid>
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
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              Uso Libre
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              Proyecto inscrito en LabNL
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              Espacio de computadoras
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              Préstamo de espacio
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              Visita a mirador
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
              {"Recorrido guiado (viernes a las 7pm)"}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container flex="25%" padding="2rem">
          <Grid
            item
            container
            flex="25%"
            backgroundColor="rgba(255,255,255,0.7)"
            borderRadius="2rem"
            boxShadow="0.1rem 0.1rem 0.5rem 0.2rem rgba(0,0,0,0.1)"
            zIndex="2"
            overflow="hidden"
            justifyContent="center"
          >
            <img
              src={EdificioImagen}
              style={{ objectFit: "cover", width: "100%", height: "80%" }}
              alt=""
            />
            <Grid
              item
              fontSize="1.1rem"
              fontWeight="700"
              paddingTop="0.5rem"
              textAlign="center"
            >
              {
                "Recorrido de vinculación (escuelas, universidades, centros culturales, etc.)"
              }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Seleccion;
