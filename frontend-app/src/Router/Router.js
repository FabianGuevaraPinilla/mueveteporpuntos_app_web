import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />

        <PrivateRoute exact path ="/home" component = {Home}/>
        {/*Ruta de páginas que no existen, error 404*/}
        <Route path={"*"} component={()=>(
            <h1 style={{marginTop: 300}}>404
                <br/>
                Página no encontrada
            </h1>
        )}/>
      </Switch>
    </Router>
  );
}

