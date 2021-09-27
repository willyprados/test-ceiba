//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="users__title"
// table con el contenido de la lista de usuarios   data-testid="users__table"
// Etiquetas de imagen con el avatar de cada usuario  data-testid=“user__img-" concatenado con el id de cada usuario.
// botón que redirecciona a la vista de crear nuevo usuario  data-testid="users__btn-create"
// un botón por cada página con el número de la página como texto data-testid="users__btn-page-" concatenado con el número de la página

import UsersTable from "../components/UsersTable";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

export default function UsersView() {
  const history = useHistory();
  return (
    <>
      <h1 data-testid="users__title">Lista de Usuarios</h1>;
      <Button
        data-testid="users__btn-create"
        onClick={() => history.push("/crear")}
        style={{ background: "#1976d2", color: "#fff", marginBottom: "5%" }}
      >
        Crear Usuario
      </Button>
      <UsersTable />
    </>
  );
}
