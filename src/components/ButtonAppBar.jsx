import { useHistory } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import MenuApp from "./MenuApp";

export default function ButtonAppBar({ setUsuarioActivo, usuarioActivo }) {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuApp />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Test Ceiba
          </Typography>
          {usuarioActivo ? (
            <Button
              data-testid="header__link-signout"
              onClick={() => {
                setUsuarioActivo(false);
                history.push("/ingreso");
              }}
              style={{ background: "#fff" }}
            >
              Cerrar Sesión
            </Button>
          ) : (
            <Button
              data-testid="header__link-login"
              onClick={() => history.push("/ingreso")}
              style={{ background: "#fff" }}
            >
              Ingresar
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
