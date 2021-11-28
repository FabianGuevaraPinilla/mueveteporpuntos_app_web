import React from 'react'
import {  Nav, Navbar, Col, Row } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'
import PrivateRoute from "../../Router/PrivateRoute";


import "./Admin.scss"

import HomeIcon from '@material-ui/icons/Home';
function Admin(props) {
    return (
            <BrowserRouter>
                <Row className = "">
                    <Col md={3} lg={2} className="Admin__nav_dashboard">
                        <Navbar >
                            <Nav defaultActiveKey="/admin" className="flex-column">
                                <Link to="/admin/main"><HomeIcon/></Link>
                                <Link to="/admin/usuarios">usuarios</Link>
                                <Link to="/admin/eventos">eventos</Link>
                                <Link to="/admin/premios">premios</Link>
                                <Nav.Link eventKey="disabled" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col md={9} lg={10}>
                        <Switch>
                        {props.children}
                        </Switch>
                        
                    </Col>
                </Row>
            </BrowserRouter>
    )
}

export default Admin
