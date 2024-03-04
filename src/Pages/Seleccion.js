import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { url } from "../helpers/API";
import axios from "axios";

import UsoLibreImage from "../assets/UsoLibre.jpeg";
import ProyectoInscritoImage from "../assets/proyectoInscrito.jpg";
import EspacioComputadorasImage from "../assets/espacioComputadoras.jpg";
import PrestamoEspacioImage from "../assets/prestamoEspacio.jpg";
import VisitaMiradorImage from "../assets/VisitaMirador.jpg";
import RecorridoGuiadoImage from "../assets/RecorridoGuiado.jpg";
import RecorridoVinculacionImage from "../assets/RecorridoVinculacion.jpg";
import SesionProyectosMediacionImage from "../assets/sesionDeProyectosMediacion.jpg";

function Seleccion() {
  const location = useLocation();
  const navigate = useNavigate();

  const [registro, setRegistro] = useState(
    location.state ? location.state : ""
  );

  const selectActivity = async (actividad) => {
    registro.actividad = actividad;
    await axios.post(`${url}/registro`, registro);
    navigate("/registroExitoso", { state: registro });
  };

  return (
    <>
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
        <Grid item container>
          <Grid
            item
            container
            alignItems="flex-end"
            backgroundColor="rgba(252, 212, 52, 0.7)"
            borderRadius="2rem"
            width="auto"
            boxShadow="0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)"
          >
            <Grid item fontSize="1.4rem" fontWeight="700" padding="1rem 2rem">
              Hola {registro.nombre}!
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            gap="0.5rem"
          >
            <Grid item fontSize="2rem">
              Selecciona una actividad
            </Grid>
          </Grid>
        </Grid>
        <Grid item container minHeight="85vh">
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() => selectActivity("Uso Libre")}
            >
              <img
                src={UsoLibreImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                Uso Libre
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() => selectActivity("Proyecto inscrito en LabNL")}
            >
              <img
                src={ProyectoInscritoImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                Proyecto inscrito en LabNL
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() => selectActivity("Espacio de computadoras")}
            >
              <img
                src={EspacioComputadorasImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                Espacio de computadoras
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() => selectActivity("Préstamo de espacio")}
            >
              <img
                src={PrestamoEspacioImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                Préstamo de espacio
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() => selectActivity("Visita a mirador")}
            >
              <img
                src={VisitaMiradorImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                Visita a mirador
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() =>
                selectActivity("Recorrido guiado (viernes a las 7pm)")
              }
            >
              <img
                src={RecorridoGuiadoImage}
                style={{ objectFit: "cover", width: "100%", height: "80%" }}
                alt=""
              />
              <Grid item fontSize="1.1rem" fontWeight="700" paddingTop="0.5rem">
                {"Recorrido guiado (viernes a las 7pm)"}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() =>
                selectActivity(
                  "Recorrido de vinculación (escuelas, universidades, centros culturales, etc.)"
                )
              }
            >
              <img
                src={RecorridoVinculacionImage}
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
          <Grid item container flex="25%" padding="1rem">
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
              onClick={() =>
                selectActivity("Sesión de proyectos con Mediación")
              }
            >
              <img
                src={SesionProyectosMediacionImage}
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
                {"Sesión de proyectos con Mediación"}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Seleccion;
