import { Grid, Typography } from "@mui/material";
import LabNlLogo from "../assets/labnlLogo.svg";
import { FaUserCircle } from "react-icons/fa";
import Barcode from "react-barcode";

const fontFamily = "Arial, monospace";

const logoStyle = {
  width: "80%",
};

function Credencial() {
  return (
    <Grid
      container
      backgroundColor="#fcfcfc"
      width="100%"
      height="100vh"
      padding="1.5rem"
    >
      <Grid
        item
        container
        width="100%"
        backgroundColor="#ffffff"
        borderRadius="1rem"
        boxShadow="0.1rem 0.1rem 0.5rem 0.1rem rgba(0,0,0,0.1)"
        padding="1.5rem"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
      >
        <Grid item container justifyContent="center" paddingTop="1.5rem">
          <Typography
            style={{
              fontFamily: fontFamily,
              fontSize: "1.8rem",
              fontWeight: "600",
              color: "#363A3C",
              borderBottom: "0.1rem solid #E8C53B",
            }}
          >
            Credencial digital
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" paddingTop="1.5rem">
          <img style={logoStyle} src={LabNlLogo} alt="" />
        </Grid>

        <Grid item container justifyContent="center">
          <FaUserCircle style={{ color: "#E8C53B", fontSize: "14rem" }} />
        </Grid>
        <Grid item paddingTop="2rem">
          <Typography
            fontFamily={fontFamily}
            fontSize="1.2rem"
            color="#363A3C"
            lineHeight="0rem"
          >
            Usuario:
          </Typography>
          <Typography
            fontFamily={fontFamily}
            fontSize="2rem"
            fontWeight="600"
            color="#363A3C"
          >
            Mauricio Portilla
          </Typography>
        </Grid>
        <Grid item padding="1rem" backgroundColor="#E8C53B" borderRadius="1rem">
          <Barcode
            value="A01284184"
            displayValue={false}
            lineColor="#363A3C"
            width="2.2"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Credencial;
