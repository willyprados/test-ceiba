import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
import { Button, TextField, Box, FormControl } from "@mui/material";

export default function FormPropsTextFields() {
  const handleSubmit = e => {
    console.log(e);
    e.preventDefault();
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl onClick={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue="email@example.com"
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button type="submit">Login</Button>
      </FormControl>
    </Box>
  );
}
