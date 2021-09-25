import * as React from "react";
import MenuApp from "./MenuApp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuApp />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App Test for Ceiba
          </Typography>
          <Link to="/ingreso">
            <Button color="inherit">Ingreso</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
