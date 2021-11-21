import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import "./Footer.login.scss";

export default function FooterLogin() {
    return (
        <div>
            <Container variant = "light">
                <Row>
                    <Col>
                        Bienvenido
                    </Col>
                </Row>
                <Row>
                    <Col>
                        2021
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
