import React from 'react'

import {
  Container,
  NavDropdown,
  Nav,
  Navbar
} from "react-bootstrap";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';

import { UserContext } from '../../Contexts/UserContext';

export default function NavbarUser() {

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Muévete por puntos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item> <Link to="/"> Inicio </Link></Nav.Item>
            <Nav.Item ><Link to="/eventos"> Eventos </Link></Nav.Item>
            <Nav.Item ><Link to="/premios"> Premios </Link></Nav.Item>
            <NavDropdown title="Qué hacer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Cómo redimir
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tu acumulado
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Tus redenciones
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Reglamento
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">El equipo</Nav.Link>
          </Nav>

          <UserContext.Consumer>
            {
              ({ username, cerrarSesionContext }) => (
                <ButtonGroup
                  variant="text"
                  color="secondary"
                  aria-label="text secondary button group"
                >
                  <Button>{username}</Button>
                  <Button onClick={cerrarSesionContext}>Salir</Button>
                </ButtonGroup>
              )
            }
          </UserContext.Consumer>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
