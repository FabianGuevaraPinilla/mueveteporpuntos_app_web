import React from 'react'

import {
  Container,
//   NavDropdown, 
//   Nav,
  Navbar
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import { Link } from 'react-router-dom';
export default function NavbarLogin() {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand> <Link to = "/"> Muévete por puntos</Link> navbar Login</Navbar.Brand>
          
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link to = "/"> Inicio </Link></Nav.Link>
              <Nav.Link href="/eventos">Eventos</Nav.Link>
              <Nav.Link href="/formulario">Catálogo Premios</Nav.Link>
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
   
            <ButtonGroup
              variant="text"
              color="secondary"
              aria-label="text secondary button group"
            >
              <Button>Contáctanos</Button>
              <Button href="/premios">Salir</Button>
            </ButtonGroup>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    )
}
