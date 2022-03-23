//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="login__title"
// Input de email  data-testid=“login__email”
// Input de contraseña  data-testid=“login__password”
// Botón para ingresar data-testid=“login__btn-login”
// Span que alerta con notificaciones  data-testid==“alert__text”

import FormLogin from "../components/FormLogin";

export default function LoginView({ setUsuarioActivo }) {
  return (
    <>
      <h1 data-testid="login__title">Ingreso de usuario</h1>
      <p style={{ display: block }}>
        <span>Para ingresar usa el siguiente email: eve.holt@reqres.in</span>
        <span>Para la contraseña, usa cualquier valor</span>
      </p>
      <FormLogin setUsuarioActivo={setUsuarioActivo} />
    </>
  );
}
