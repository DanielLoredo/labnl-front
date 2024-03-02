import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import edificioImage from "../assets/edificio.jpg";
import LabNlLogo from "../assets/labnlLogo.svg";
import axios from "axios";
import { url } from "../helpers/API";
import { useLocation, useNavigate } from "react-router-dom";

const fontFamily = "Roboto, monospace";

const imageStyle = {
  width: "100%",
  height: "99.5vh",
  objectFit: "cover",
};

const imageTextStyle = {
  position: "absolute",
  bottom: "2.5rem",
  left: "1rem",
};

const imageTypographyStyle = {
  fontFamily: fontFamily,
  color: "#ffffff",
  fontSize: "3.5rem",
  lineHeight: "3.5rem",
};

const logoStyle = {
  width: "30%",
  paddingBottom: "5rem",
};

const formItemTitle = {
  fontFamily: fontFamily,
  fontSize: "1rem",
  padding: "1rem 0 0 1rem",
};

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(
    location.state ? location.state.email : ""
  );
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const loginResponse = await axios.post(`${url}/login`, {
      email: email,
      password: password,
    });

    if (loginResponse.data.user) {
      navigate("/credencial", { state: loginResponse.data.user });
    } else {
      console.log("Usuario invalido");
    }
  };

  return (
    <Grid container width="100%" minHeight="100vh" position="relative">
      <Grid
        item
        width="50%"
        height="100vh"
        backgroundColor="#fcfcfc"
        padding="6rem 4rem 4rem 4rem"
        overflow="auto"
        xs={12}
        md={6}
      >
        <img style={logoStyle} src={LabNlLogo} alt="" />
        <Grid container>
          <Grid item container paddingBottom="1rem">
            <Grid item>
              <Typography
                fontFamily={fontFamily}
                fontSize="2rem"
                fontWeight="800"
              >
                Bienvenido
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontFamily={fontFamily}>
                En LABNL las y los ciudadanos colaboramos, experimentamos y
                prototipamos proyectos para el bien común.
              </Typography>
            </Grid>
          </Grid>
          <Grid item container flexDirection="column" paddingBottom="2rem">
            <Grid item container flexDirection="column">
              <Grid item>
                <Typography style={formItemTitle}>
                  Correo electrónico
                </Typography>
              </Grid>
              <Grid item backgroundColor="#ffffff">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="tucorreo@gmail.com"
                  fullWidth
                  InputProps={{
                    classes: {
                      input: { fontFamily: fontFamily },
                    },
                  }}
                  defaultValue={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid item container flexDirection="column">
              <Grid item>
                <Typography style={formItemTitle}>Contraseña</Typography>
              </Grid>
              <Grid item backgroundColor="#ffffff">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Escribe tu contraseña"
                  fullWidth
                  InputProps={{
                    classes: {
                      input: { fontFamily: fontFamily },
                    },
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Typography
                sx={{ textDecoration: "underline" }}
                color="rgba(0,0,0,0.6)"
                fontSize="0.9rem"
                paddingTop="1rem"
              >
                ¿Olvidaste tu contraseña?
              </Typography>

              <Grid item container paddingTop="3rem">
                <Button variant="contained" fullWidth onClick={loginUser}>
                  <Typography textTransform="capitalize" padding="0.5rem">
                    Iniciar sesión
                  </Typography>
                </Button>
              </Grid>

              <Grid item container paddingTop="6rem">
                <Grid container>
                  <Grid item>
                    <Typography color="rgba(0,0,0,0.6)">
                      ¿Aún no te has registrado?,&nbsp;
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="rgba(0,0,0,0.6)"
                      sx={{ textDecoration: "underline" }}
                    >
                      Regístrate aquí
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={6} position="relative">
        <Box component={Grid} item display={{ xs: "none", md: "block" }}>
          <img style={imageStyle} src={edificioImage} alt="" />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
            }}
          />
          <div style={imageTextStyle}>
            <Grid container flexDirection="column">
              <Grid item>
                <Typography style={imageTypographyStyle}>LABNL</Typography>
              </Grid>
              <Grid item>
                <Typography style={imageTypographyStyle}>
                  Lab Cultural Ciudadano
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
