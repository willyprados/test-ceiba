import { useState, useRef } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { makeStyles } from "@material-ui/styles";
import { Button, TextField, Box, FormControl } from "@mui/material";

export default function FormPropsTextFields() {
  const [emailValido, setEmailValido] = useState(true);
  const [passValido, setPassValido] = useState(true);
  const emailRef = useRef();
  const passRef = useRef();

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

    console.log(emailRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl>
        <TextField
          required
          inputRef={emailRef}
          error={!emailValido}
          onChange={() => setEmailValido(true)}
          id="outlined-required"
          label="Correo"
          type="email"
          helperText={!emailValido ? "Ingresa un correo valido" : ""}
        />
        <TextField
          required
          inputRef={passRef}
          error={!passValido}
          onChange={() => setPassValido(true)}
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          helperText={!passValido ? "Ingresa contraseña" : ""}
        />
        <Button type="submit">Ingresar</Button>
      </FormControl>
    </Box>
  );
}
