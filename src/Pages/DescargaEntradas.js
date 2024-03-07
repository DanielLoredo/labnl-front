import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { url } from "../helpers/API";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { CSVLink } from "react-csv";

const columns = [
  { field: "id", headerName: "ID", width: 80 },
  { field: "nombre", headerName: "Nombre", width: 200 },
  { field: "fechaAcceso", headerName: "Fecha/Hora", width: 300 },
  { field: "actividad", headerName: "Actividad", width: 300 },
];

function DescargaEntradas() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    getRegistros();
  }, []);

  const getRegistros = async () => {
    const registrosActuales = await axios.get(`${url}/registros`);
    setRegistros(registrosActuales.data);
  };
  return (
    <Grid container flexDirection="column" padding="2rem">
      <Grid item alignSelf="flex-end" marginBottom="1rem">
        <Button variant="contained">
          <CSVLink data={registros}>
            <Typography
              textTransform="none"
              color="#ffffff"
              sx={{ textDecoration: "none" }}
            >
              Descargar CSV
            </Typography>
          </CSVLink>
        </Button>
      </Grid>
      <Grid item>
        <DataGrid
          rows={registros}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Grid>
    </Grid>
  );
}

export default DescargaEntradas;
