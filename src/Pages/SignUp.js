import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import edificioImage from "../assets/edificio.jpg";
import LabNlLogo from "../assets/labnlLogo.svg";
import axios from "axios";
import { url } from "../helpers/API";
import { useNavigate } from "react-router-dom";

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
  paddingBottom: "3rem",
};

const formItemTitle = {
  fontFamily: fontFamily,
  fontSize: "1rem",
  padding: "1rem 0 0 1rem",
};

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [paisNacimiento, setPaisNacimiento] = useState("");
  const [telefono, setTelefono] = useState("");
  const [genero, setGenero] = useState("");
  const [escolaridad, setEscolaridad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [estado, setEstado] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [colonia, setColonia] = useState("");
  const [discapacidad, setDiscapacidad] = useState("");
  const [lenguaIndigena, setLenguaIndigena] = useState("");
  const [asociacion, setAsociacion] = useState("");

  const signupUser = async () => {
    const singupUserResponse = await axios.post(`${url}/signup`, {
      email: email,
      password: password,
      nombre: nombre,
      apellidos: apellidos,
      fechaNacimiento: fechaNacimiento,
      paisNacimiento: paisNacimiento,
      telefono: telefono,
      genero: genero,
      escolaridad: escolaridad,
      codigoPostal: codigoPostal,
      estado: estado,
      ciudad: ciudad,
      colonia: colonia,
      capacidadEspecial: discapacidad,
      lenguaIndigena: lenguaIndigena,
      asociacion: asociacion,
      nombreAsociacion: "",
      ocupacion: "Estudiante",
      deseasRecibirInformacion: "",
    });

    if (singupUserResponse.data.user) {
      navigate("/login", { state: singupUserResponse.data.user });
    } else {
      console.log("Uno de los campos ingresados no es valido");
    }
  };

  return (
    <Grid container width="100%" minHeight="100vh" position="relative">
      <Grid
        item
        width="50%"
        height="100vh"
        backgroundColor="#fcfcfc"
        padding="4rem"
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
                Regístrate
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontFamily={fontFamily}>
                Registrate para tener acceso al laboratorio ciudadano,
                participar en las convocatorias, asistir a eventos y mucho más.
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
              <Typography color="rgba(0,0,0,0.4)" fontSize="0.9rem">
                Debe contener al menos 8 caracteres
              </Typography>
            </Grid>
          </Grid>

          <Grid item container paddingBottom="1.5rem">
            <Grid item container>
              <Typography fontWeight="800" fontSize="1.2rem">
                Datos Personales
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Nombre</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff" paddingRight="0.5rem">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Tu nombre"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Apellidos</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Tus apellidos"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>
                    Fecha de nacimiento
                  </Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff" paddingRight="0.5rem">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="mm/dd/yyyy"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>
                    País de nacimiento
                  </Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Mexico"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setPaisNacimiento(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography
                    style={formItemTitle}
                  >{`Teléfono (opcional)`}</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff" paddingRight="0.5rem">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="123 123 1234"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>{`Género`}</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Selecciona tu género"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setGenero(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography
                    style={formItemTitle}
                  >{`Escolaridad (opcional)`}</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Selecciona tu escolaridad"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setEscolaridad(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container paddingBottom="1rem">
            <Grid item container>
              <Typography fontWeight="800" fontSize="1.2rem">
                Lugar de residencia
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Código Postal</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff" paddingRight="0.5rem">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Código postal"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setCodigoPostal(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Estado</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Estado"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Ciudad</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff" paddingRight="0.5rem">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Ciudad"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setCiudad(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container sx={12} md={6} flexDirection="column">
                <Grid item>
                  <Typography style={formItemTitle}>Colonia</Typography>
                </Grid>
                <Grid item backgroundColor="#ffffff">
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Colonia"
                    fullWidth
                    InputProps={{
                      classes: {
                        input: { fontFamily: fontFamily },
                      },
                    }}
                    onChange={(e) => setColonia(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container>
            <Grid item container paddingBottom="1rem">
              <Typography fontWeight="800" fontSize="1.2rem">
                Datos Generales
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item container flexDirection="column">
                <Grid item>
                  <Typography>¿Tienes alguna discapacidad?</Typography>
                </Grid>
                <Grid item>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(e) => setDiscapacidad(e.target.value)}
                    >
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="si"
                        control={<Radio />}
                        label="Si"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item container flexDirection="column">
                <Grid item>
                  <Typography>¿Hablas alguna lengua indígena?</Typography>
                </Grid>
                <Grid item>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(e) => setLenguaIndigena(e.target.value)}
                    >
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="si"
                        control={<Radio />}
                        label="Si"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid item container flexDirection="column">
                <Grid item>
                  <Typography>
                    ¿Perteneces a una asociación u organización?
                  </Typography>
                </Grid>
                <Grid item>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={(e) => setAsociacion(e.target.value)}
                    >
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="si"
                        control={<Radio />}
                        label="Si"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container paddingTop="1.5rem">
            <Grid item container marginLeft="-0.6rem" alignItems="center">
              <Grid item>
                <Checkbox defaultChecked />
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Typography>Acepto las&nbsp;</Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ textDecoration: "underline" }}>
                      Políticas de Privacidad
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container paddingTop="2rem">
              <Button variant="contained" fullWidth onClick={signupUser}>
                <Typography textTransform="capitalize" padding="0.5rem">
                  Registrarme
                </Typography>
              </Button>
            </Grid>

            <Grid item container paddingTop="2rem">
              <Grid container>
                <Grid item>
                  <Typography>¿Ya te habías registrado?,&nbsp;</Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ textDecoration: "underline" }}>
                    Inicia sesión aquí
                  </Typography>
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

export default SignUp;
