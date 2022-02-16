import { useState, useRef } from "react";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Collapse,
  Alert,
  AlertTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FormCreateUser() {
  const [dataInvalida, setDataInvalida] = useState(false);
  const [nameValido, setNameValido] = useState(true);
  const [jobValido, setJobValido] = useState(true);
  const [usuarioCreado, setUsuarioCreado] = useState({});
  const nameRef = useRef();
  const jobRef = useRef();
  const urlCreate = "https://reqres.in/api/users";

  const APIcreate = (name, job) => {
    axios
      .post(urlCreate, {
        name,
        job,
      })
      .then(response => {
        const usuario = response.data;
        setUsuarioCreado(usuario);
      })
      .catch(() => {
        setDataInvalida(true);
        setNameValido(false);
        setJobValido(false);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value;
    const job = jobRef.current.value;
    if (name === "") {
      setNameValido(false);
    }
    if (job === "") {
      setJobValido(false);
    }
    if (name !== "" && job !== "") {
      APIcreate(name, job);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Collapse in={Boolean(usuarioCreado.name)}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setUsuarioCreado({});
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            <AlertTitle>Creado exitosamente 🎉</AlertTitle>
            <span data-testid="alert__text">
              {`Se creo el usuario ${usuarioCreado.name} con id:${usuarioCreado.id}`}
            </span>
          </Alert>
        </Collapse>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          {dataInvalida && <Typography>Datos Invalidos ❌</Typography>}
          <TextField
            onChange={() => {
              setNameValido(true);
              setDataInvalida(false);
            }}
            inputProps={{ "data-testid": "create__name" }}
            inputRef={nameRef}
            error={!nameValido}
            required
            label="Nombre"
            type="text"
            helperText={
              !nameValido ? (
                <span data-testid="alert__text">"Nombre es requerido"</span>
              ) : (
                ""
              )
            }
          />
          <TextField
            onChange={() => {
              setJobValido(true);
              setDataInvalida(false);
            }}
            inputProps={{ "data-testid": "create__job" }}
            inputRef={jobRef}
            error={!jobValido}
            required
            label="Trabajo"
            type="text"
            helperText={
              !jobValido ? (
                <span data-testid="alert__text">"Trabajo es requerido"</span>
              ) : (
                ""
              )
            }
          />
          <Button
            style={{ background: "#1976d2", color: "#fff" }}
            data-testid="create__btn"
            type="submit"
          >
            Crear Usuario
          </Button>
        </FormControl>
      </Box>
    </>
  );
}
