import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../helpers/API";

function ScanUserField() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (email.length === 9) {
      onSubmitCodigo();
    }
  }, [email]);

  const onSubmitCodigo = async () => {
    const submitCodigoResponse = await axios.post(
      //   `${url}/lecturaCredencial?email=${email}`
      `${url}/lecturaCredencial?email=A01284185@tec.mx`
    );
    setUser(submitCodigoResponse.data.user);
  };

  return (
    <Grid container>
      <TextField
        required
        id="outlined-required"
        placeholder="tucorreo@gmail.com"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
      />
      {user ? `${user.nombre} ${user.apellidos}` : ""}
    </Grid>
  );
}

export default ScanUserField;
