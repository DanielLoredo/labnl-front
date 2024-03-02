import LabNlLogo from "../assets/labnlLogo.svg";
import pulseraImagen from "../assets/pulseraNFC.png";
import credencialDigital from "../assets/credencialDigitalCellphone.png";
import { Grid } from "@mui/material";
import { MdSensors } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../helpers/API";
import { useNavigate } from "react-router-dom";

const logoStyle = {
  height: "5rem",
};

const imageStyle = {
  width: "90%",
  objectFit: "cover",
};

const icon = {
  width: "10rem",
  height: "10rem",
  position: "absolute",
  bottom: "0",
  right: "1rem",
  backgroundColor: "#3F3E36",
  color: "#FCD434",
  borderRadius: "2rem",
  boxShadow: "0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.4)",
};

function Tablero() {
  const navigate = useNavigate();

  const [ticking, setTicking] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ticking) {
        setCount(count + 1);
        checkLastRecord(); // Call your function here
      }
    }, 2000);
    return () => clearTimeout(timer); // Cleanup when component unmounts
  }, [count, ticking]);

  const checkLastRecord = async () => {
    const lastRecordResponse = await axios.get(
      //   `${url}/lecturaCredencial?email=${email}`
      `${url}/revisarUltimoRegistro`
    );

    if (lastRecordResponse.data) {
      goToSelectActivity(lastRecordResponse.data);
    }
  };

  const goToSelectActivity = (lastRecord) => {
    setTicking(false);
    navigate("/seleccion", { state: lastRecord });
  };

  return (
    <Grid
      container
      width="100%"
      minHeight="100vh"
      position="relative"
      backgroundColor="#fcfcfc"
      flexDirection="column"
      alignItems="center"
      padding="2rem"
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
          top: "-6rem",
          left: "-6rem",
          zIndex: "0",
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

      <Grid item alignSelf="flex-end">
        <img style={logoStyle} src={LabNlLogo} alt="" />
      </Grid>
      <Grid
        item
        container
        backgroundColor="#ffffff"
        boxShadow="0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.2)"
        borderRadius="1rem"
        marginTop="1rem"
        padding="1rem"
        zIndex="1"
      >
        <Grid
          item
          flex="50%"
          container
          flexDirection="column"
          alignItems="center"
          color="#3F3E36"
        >
          <Grid item fontSize="2rem" fontWeight="700">
            Aproxima tu pulsera al sensor
          </Grid>
          <Grid item position="relative">
            <img style={imageStyle} src={pulseraImagen} alt="" />
            <Grid backgroundColor="#3F3E36">
              <MdSensors style={icon} />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          flex="50%"
          container
          flexDirection="column"
          alignItems="center"
        >
          <Grid item fontSize="2rem" fontWeight="700">
            Escanea tu credencial digital
          </Grid>
          <Grid item position="relative">
            <img style={imageStyle} src={credencialDigital} alt="" />
            <Grid backgroundColor="#3F3E36">
              <CiBarcode style={icon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Tablero;
