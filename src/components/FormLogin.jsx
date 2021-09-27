import { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, TextField, Box, FormControl, Typography } from "@mui/material";

export default function FormPropsTextFields({ setUsuarioActivo }) {
  const history = useHistory();
  const [dataInvalida, setDataInvalida] = useState(false);
  const [emailValido, setEmailValido] = useState(true);
  const [passValido, setPassValido] = useState(true);
  const emailRef = useRef();
  const passRef = useRef();
  const baseURL = "https://reqres.in/api/login";

  const APIlogin = (email, password) => {
    axios
      .post(baseURL, {
        email,
        password,
      })
      .then(response => {
        const { token = "" } = response.data;
        if (token !== "") {
          setUsuarioActivo(true);
          history.push("/");
        }
      })
      .catch(() => {
        setDataInvalida(true);
        setEmailValido(false);
        setPassValido(false);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    if (email === "") {
      setEmailValido(false);
    }
    if (pass === "") {
      setPassValido(false);
    }
    if (email !== "" && pass !== "") {
      APIlogin(email, pass);
    }
  };

  return (
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
          required
          inputProps={{ "data-testid": "login__email" }}
          inputRef={emailRef}
          error={!emailValido}
          onChange={() => {
            setEmailValido(true);
            setDataInvalida(false);
          }}
          label="Email"
          type="email"
          helperText={
            !emailValido ? (
              <span data-testid="alert__text">"Email es requerido"</span>
            ) : (
              ""
            )
          }
        />
        <TextField
          required
          inputProps={{
            "data-testid": "login__password",
          }}
          inputRef={passRef}
          error={!passValido}
          onChange={() => {
            setPassValido(true);
            setDataInvalida(false);
          }}
          label="Contraseña"
          type="password"
          helperText={
            !passValido ? (
              <span data-testid="alert__text">"Contraseña es requerida"</span>
            ) : (
              ""
            )
          }
        />
        <Button
          style={{ background: "#1976d2", color: "#fff" }}
          data-testid="login__btn-login"
          type="submit"
        >
          Ingresar
        </Button>
      </FormControl>
    </Box>
  );
}
