import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MenuApp() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/">
          <MenuItem>Inicio</MenuItem>
        </Link>
        <Link data-testid="header__link-users" to="/usuarios">
          <MenuItem>Usuarios</MenuItem>
        </Link>
        <Link data-testid="header__link-create" to="/crear">
          <MenuItem>Crear usuario</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
