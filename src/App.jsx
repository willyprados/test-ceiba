import React from "react";

import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ButtonAppBar from "./components/ButtonAppBar";
import FormLogin from "./components/FormLogin";
import FormSignUp from "./components/FormSignUp";
import CreateUserView from "./views/CreateUserView";
import UsersView from "./views/UsersView";
import LoginView from "./views/LoginView";
import Error404View from "./views/Error404View";
import HomeView from "./views/HomeView";

function App() {
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
            <FormLogin />
          </Route>
          <Route path="/profile">
            <UsersView />
          </Route>
          <Route path="/create-profile">
            <CreateUserView />
            <FormSignUp />
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
