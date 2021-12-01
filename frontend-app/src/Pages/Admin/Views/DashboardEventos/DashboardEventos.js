import React, { Component } from 'react'
import { Container, Nav, Row } from 'react-bootstrap';

//componentes usados
import FormEventoEditar from "./Components/FormEventoEditar";
import FormEventoNuevo from "./Components/FormEventoNuevo";
import TableEventos from "./Components/TableEventos";

import config from '../../../../config';

export default class DashboardEventos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaEventos: [],
            listaCategoriaEventos: [],
            listaTipoEventos: [],
            listaSucursales: [],

            isLoadingData: true,

            //navegacion
            currentTab: 'buscar',
            //id selecionado
            _id: null,
        }

        //métodos de navegación entre opciones
        this.changeTab = this.changeTab.bind(this);
        this.setIdCurrentEvento = this.setIdCurrentEvento.bind(this);
        this.getIdCurrentEvento = this.getIdCurrentEvento.bind(this);

    }

    //colocar el tab a mostrar
    changeTab(tab) {
        this.setState({ currentTab: tab });
    }
    //colocar el id ????

    setIdCurrentEvento(id) {
        this.setState({ _id: id });
    }

    getIdCurrentEvento() {
        return this.state._id;
    }


    consultarCategoria() {
        //hace fetch de las categorias
        fetch(config.HOST_API + "/eventos/categorias", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODdkM2MxYzE0MmNjZTdiMDQ3YjZkOCIsInVzdWFyaW8iOiJhZG1pbiIsImlhdCI6MTYzNjMyMDAyM30.oO7uQ75HRCiJhMN9JK6tk3DpWlIVADrCKfBsnLkbJiw"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.state.listaCategoriaEventos = data;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    consultarTipos() {
        //hace fetch de las categorias
        fetch(config.HOST_API + "/eventos/tipos", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODdkM2MxYzE0MmNjZTdiMDQ3YjZkOCIsInVzdWFyaW8iOiJhZG1pbiIsImlhdCI6MTYzNjMyMDAyM30.oO7uQ75HRCiJhMN9JK6tk3DpWlIVADrCKfBsnLkbJiw"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.state.listaTipoEventos = data;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    consultarSucursales() {
        fetch(config.HOST_API + "/sucursales", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODdkM2MxYzE0MmNjZTdiMDQ3YjZkOCIsInVzdWFyaW8iOiJhZG1pbiIsImlhdCI6MTYzNjMyMDAyM30.oO7uQ75HRCiJhMN9JK6tk3DpWlIVADrCKfBsnLkbJiw"
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.state.listaSucursales = data;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    consultaEventos() {
        fetch(config.HOST_API + "/eventos",
            {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODdkM2MxYzE0MmNjZTdiMDQ3YjZkOCIsInVzdWFyaW8iOiJhZG1pbiIsImlhdCI6MTYzNjMyMDAyM30.oO7uQ75HRCiJhMN9JK6tk3DpWlIVADrCKfBsnLkbJiw"
                }
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.state.listaEventos = data;
                this.state.isLoadingData = false;
                //   this.listaEventos = data;

                //   if (this.listaEventos.length != 0) {
                //     this.datosVacios = false;
                //   } else {
                //     this.datosVacios = true;
                //   }
                //   console.log(this.errorConsulta);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    //cuando el componente se esta creando
    componentDidMount() {
        console.log("eventos");
        this.consultaEventos();
        this.consultarCategoria();
        this.consultarSucursales();
        this.consultarTipos();
        console.log("eventos fin");
        this.setState({ isLoadingData: false })
    }

    render() {
        let isLoadingData = this.state.isLoadingData;
        console.log(isLoadingData)
        return (
            <Container id="crudSimple-container">
                <Row>
                    <Nav
                        fill
                        variant="tabs"
                        defaultActiveKey="buscar"
                        onSelect={(eventKey) => this.setState({ currentTab: eventKey })}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Búsqueda eventos</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear evento</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab === 'buscar' ? (
                        <TableEventos
                            changeTab={this.changeTab}
                            setIdCurrentEvento={this.setIdCurrentEvento}
                        />
                    ) : this.state.currentTab === 'crear' ? (
                        <FormEventoNuevo changeTab={this.changeTab} />
                    ) : (
                        <FormEventoEditar
                            changeTab={this.changeTab}
                            getIdCurrentEvento={this.getIdCurrentEvento}
                        />
                    )}
                </Row>
            </Container>
        )
    }
}
