import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import EventosPage from "../Pages/Eventos/EventosPage";
import DashboardEventos from "../Pages/Admin/Views/DashboardEventos/DashboardEventos";
import DashboardMain from "../Pages/Admin/Views/DashboardMain.js/DashboardMain";
import DashboardUsuarios from "../Pages/Admin/Views/DashboardUsuarios/DashboardUsuarios";
export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />

        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/eventos" component={EventosPage} />
        <PrivateRoute exact path="/admin">
          <Admin>
            <PrivateRoute exact path="/admin" component = {DashboardMain}></PrivateRoute>
            <PrivateRoute path="/admin/usuarios" component = {DashboardUsuarios}> </PrivateRoute>
            <PrivateRoute path="/admin/eventos" component = {DashboardEventos}></PrivateRoute>
            <PrivateRoute path="/admin/premios"> <h1>DASHBOARD premios</h1></PrivateRoute>
            <PrivateRoute path="/admin/puntos"> <h1>DASHBOARD puntos</h1></PrivateRoute>
          </Admin>
        </PrivateRoute>

      {/*Ruta de páginas que no existen, error 404*/}
        <Route path={"*"} component={() => (
        <h1 style={{ marginTop: 300 }}>404
        <br />
        Página no encontrada
        </h1>
      )} />
      </Switch>
    </Router>
  );
}

