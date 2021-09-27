import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";

import ButtonAppBar from "./components/ButtonAppBar";
import CreateUserView from "./views/CreateUserView";
import UsersView from "./views/UsersView";
import LoginView from "./views/LoginView";
import Error404View from "./views/Error404View";
import HomeView from "./views/HomeView";

function App() {
  const [usuarioActivo, setUsuarioActivo] = useState(false);

  return (
    <>
      <CssBaseline />
      <Router>
        <ButtonAppBar
          setUsuarioActivo={setUsuarioActivo}
          usuarioActivo={usuarioActivo}
        />
        <Container
          maxWidth="md"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route path="/ingreso">
              <LoginView setUsuarioActivo={setUsuarioActivo} />
            </Route>
            <Route path="/usuarios">
              {usuarioActivo ? <UsersView /> : <Redirect to="/ingreso" />}
            </Route>
            <Route path="/crear">
              {usuarioActivo ? <CreateUserView /> : <Redirect to="/ingreso" />}
            </Route>
            <Route path="*">
              <Error404View />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
