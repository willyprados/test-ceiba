import { useState } from "react";

import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";
import CreateUserView from "./views/CreateUserView";
import UsersView from "./views/UsersView";
import LoginView from "./views/LoginView";
import Error404View from "./views/Error404View";
import HomeView from "./views/HomeView";

function App() {
  const [usuarioActivo, setUsuarioActivo] = useState(true);

  return (
    <>
      <CssBaseline />
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/ingreso">
            <LoginView />
          </Route>
          <Route path="/usuarios">
            {usuarioActivo ? <UsersView /> : <Redirect to="/ingreso" />}
          </Route>
          <Route path="/crear">
            {usuarioActivo ? <CreateUserView /> : <Redirect to="/ingreso" />}
          </Route>
          <Route path="/cerrar-sesion">
            <HomeView />
          </Route>
          <Route path="*">
            <Error404View />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

// function App() {
//   return (
//     <>
//       {/* <CssBaseline /> */}
//       {/* <div className="main"> */}
//       <Router>
//         {/* <ButtonAppBar /> */}
//         <Switch>
//           {/* {console.log("Holaaa")} */}
//           <Route path="/">
//             <h1>Home</h1>
//           </Route>
//           <Route path="/profile">
//             <h1>Profile</h1>
//             {/* {console.log("Aja perro")} */}
//             {/* <CreateUserView /> */}
//           </Route>
//           {/* <Route path="/my-account">
//             <UsersView />
//           </Route>
//           <Route path="/logout">
//             <LoginView />
//           </Route>
//           <Route path="/404">
//             <Error404View />
//           </Route> */}
//         </Switch>
//       </Router>
//       {/* </div> */}
//     </>
//   );
// }

export default App;
