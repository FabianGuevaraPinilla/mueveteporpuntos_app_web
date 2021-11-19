import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarLogin from "./Components/Navbar/Navbar.login";
import FooterLogin from "./Components/Footer/Footer.login";

import AppRouter from "./Router/Router";

function App() {
  return (
    <div className="App">
      <NavbarLogin/>
      <AppRouter />
      <FooterLogin/>
    </div>
  );
}

export default App;