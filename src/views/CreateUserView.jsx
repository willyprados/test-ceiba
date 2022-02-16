//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:
//h1 de título="create__title"
// Input de nombre=“create__name”
// Input de trabajo=“create__job”
// Span que alerta con notificaciones=“alert__text”
// Botón para crear= “create__btn”

import FormCreateUser from "../components/FormCreateUser";

export default function CreateUserView() {
  return (
    <>
      <h1 data-testid="create__title">Crear usuario</h1>
      <FormCreateUser />
    </>
  );
}
