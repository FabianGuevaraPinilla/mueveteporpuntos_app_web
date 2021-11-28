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


export default function NavbarAdmin() {

    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/admin">Muévete por puntos</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item> <Link to="/admin"> Dashboard </Link></Nav.Item>
                        <Nav.Item ><Link to="/eventos">Ver Eventos</Link></Nav.Item>
                        <Nav.Item ><Link to="/premios">Ver Catálogo Premios</Link></Nav.Item>
                        <NavDropdown title="Acciones" id="basic-nav-dropdown">
                            <NavDropdown.Item >
                                <UserContext.Consumer>
                                    {
                                        ({ verComoUsuario}) => (
                                            <Button onClick={verComoUsuario}>
                                                Ver como Usuario
                                            </Button>
                                        )
                                    }
                                </UserContext.Consumer>
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
