import { useState, useRef } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { makeStyles } from "@material-ui/styles";
import { Button, TextField, Box, FormControl, Typography } from "@mui/material";

export default function FormPropsTextFields({ setUsuarioActivo }) {
  const baseURL = "https://reqres.in/api/login";
  const history = useHistory();

  const [dataInvalida, setDataInvalida] = useState(false);
  const [emailValido, setEmailValido] = useState(true);
  const [passValido, setPassValido] = useState(true);
  const emailRef = useRef();
  const passRef = useRef();

  const APIlogin = (email, password) => {
    axios
      .post(baseURL, {
        email,
        password,
      })
      .then(response => {
        const { token = "" } = response.data;
        console.log(token);
        if (token !== "") {
          setUsuarioActivo(true);
          history.push("/");
        }
      })
      .catch(er => {
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

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
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
        {dataInvalida && <Typography>Datos Invalidos</Typography>}
        <TextField
          required
          inputProps={{ "data-testid": "login__email" }}
          inputRef={emailRef}
          error={!emailValido}
          onChange={() => {
            setEmailValido(true);
            setDataInvalida(false);
          }}
          id="outlined-required"
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
          id="outlined-password-input"
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
        <Button data-testid="login__btn-login" type="submit">
          Ingresar
        </Button>
      </FormControl>
    </Box>
  );
}
