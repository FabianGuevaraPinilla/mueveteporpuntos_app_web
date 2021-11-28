import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";


import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home"
import Admin from "../Pages/Admin/Admin"
import EventosPage from "../Pages/Eventos/EventosPage";
import PremiosPage from "../Pages/Premios/PremiosPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import EventosInscripcion from "../Pages/Eventos/Components/EventosInscripcion";


import DashboardEventos from "../Pages/Admin/Views/DashboardEventos/DashboardEventos";
import DashboardMain from "../Pages/Admin/Views/DashboardMain.js/DashboardMain";
import DashboardUsuarios from "../Pages/Admin/Views/DashboardUsuarios/DashboardUsuarios";
import { UserContext } from "../Contexts/UserContext";
import { getAuth, getRol } from "../Helper/helper";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";



export default class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.rutas = {
      user: [
        {
          path: ["/", "/home"],
          component: { Home }
        },
        {
          path: "/eventos",
          component: { EventosPage }
        },
        {
          path: "/premios",
          component: { PremiosPage }
        }
      ],
      admin: [
        {
          path: ["/", "/admin"],
          component: { Admin }
        }
      ]
    }
    this.state = {
      auth: getAuth(),
      rol: getRol(),
    }
  }

  static contextType = UserContext;

  componentDidMount() {
    const { auth, rol } = this.context;
    console.log(" se monta el router " + rol)
    if (getAuth() && (!auth)) {
      // si está autenticado, pero el contexto no
      console.log("esta el token ")
      this.setState({
        auth: getAuth(),
        rol: getRol()
      })
    }
  }



  componentDidUpdate() {
    console.log("actualizando router")
    console.log(this.state)
    console.log(window.location.pathname)
    const { auth, rol } = this.context;
    if (rol !== this.state.rol) {
      this.setState({
        rol: rol
      })
    }
    if (this.state.auth !== getAuth()) {
      this.setState({
        auth: getAuth()
      })

    }
    console.log(this.state)
  }

  render() {

    console.log("estado auth " + this.state.auth);

    if (!this.state.auth && !getAuth()) {
      console.log("aplicando render del router login")
      return (
        <div className="mt-5 pt-2">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
      )
    }
    else {

      if (this.state.rol === "USER") {
        return (
          <div className="mt-5 pt-2">
            <Switch>
              <PrivateRoute exact path={["/", "/home"]} component={Home} />
              <PrivateRoute exac path="/eventos" component={EventosPage} />
              <PrivateRoute path="/eventos/inscripcion/:idEvento" component={EventosInscripcion} />
              <PrivateRoute path="/premios" component={PremiosPage} />
              <Redirect from="/login" to="/" />
              <Route path={"*"} component={NotFoundPage} />
            </Switch>
          </div >
        )
      }
      else {
        return (
          <div className="mt-5 pt-2">
            <Switch>
              <PrivateRoute exact path="/eventos" component={EventosPage} />
              <PrivateRoute path="/eventos/inscripcion/:idEvento" component={EventosInscripcion} />
              <PrivateRoute path="/premios" component={PremiosPage} />
              
              <PrivateRoute exact path={["/admin", "/admin/main"]}>
                <Admin>
                  <PrivateRoute exact path="/admin/main" component={DashboardMain}></PrivateRoute>
                  <PrivateRoute exact exact path="/admin/usuarios" component={DashboardUsuarios}> </PrivateRoute>
                  <PrivateRoute exact path="/admin/eventos" component={DashboardEventos}></PrivateRoute>
                  <PrivateRoute exact path="/admin/premios"> <h1>DASHBOARD premios</h1></PrivateRoute>
                  <PrivateRoute exact path="/admin/puntos"> <h1>DASHBOARD puntos</h1></PrivateRoute>
                  <PrivateRoute path={"*"}>
                    <Redirect to="/admin/main" />
                  </PrivateRoute>
                </Admin>
              </PrivateRoute>
              <Route path={"*"} component={NotFoundPage} />
              <Redirect from="/login" to="/admin" />

            </Switch>
          </div >
        );
      }

    }
  }
}