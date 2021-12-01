import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

import { request } from '../../../../../Helper/helper';

import ConfirmationPrompt from '../../../../../Components/Prompts/ConfirmationPrompt';
import Loading from '../../../../../Components/Loading/Loading';
import MessagePrompt from '../../../../../Components/Prompts/MessagePrompt';

const urlAPIEventos = "/eventos";

export default class FormEventoEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCurrentEvento: this.props.getIdCurrentEvento(),
            rediret: false,
            message: {
                text: '',
                show: false,
            },
            confirmation: {
                title: 'Modificar ',
                text: '¿Deseas modificar?',
                show: false,
            },
            loading: false,
            dataEvento: {
                id_categoria: 0,
                id_tipo: 0,
                id_sucursal: 0,
                titulo: "",
                fecha_inicio: "",
                fecha_fin: "",
                lugar: "",
                url: "",
                path_foto: "",
                cupo: 0,
                valor_puntos: 0,
                disponible: true,
            },
            listaCategoriaEventos: [],
            listaSucursales: [],
            listaTipoEventos: []
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    componentDidMount() {
        this.getdataEvento();
        this.consultarCategoria();
        this.consultarSucursales();
        this.consultarTipos();
    }
    componentDidUpdate() {
        // console.log(this.state.listaSucursales)
    }

    consultarCategoria() {
        //hace la consulta de las categorias
        request.
            get(`${urlAPIEventos}/categorias`)
            .then((response) => {
                this.setState({
                    listaCategoriaEventos: response.data,
                    loading: false,
                });
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }
    consultarTipos() {
        //hace fetch de las categorias
        request.
            get(`${urlAPIEventos}/tipos`)
            .then((response) => {
                this.setState({
                    listaTipoEventos: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }
    consultarSucursales() {
        request.
            get("/sucursales")
            .then((response) => {
                this.setState({
                    listaSucursales: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    getdataEvento() {
        this.setState({ loading: true });
        request
            .get(`${urlAPIEventos}/${this.state.idCurrentEvento}?simple=true`)
            .then((response) => {
                this.setState({
                    dataEvento: response.data,
                    loading: false,
                });
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    setValue(index, value) {
        this.setState({
            dataEvento: {
                ...this.state.dataEvento,
                [index]: value,
            },
        });
    }

    guardarCrudSimple() {
        this.setState({ loading: true });
        request
            .put(`${urlAPIEventos}/${this.state.idCurrentEvento}`, this.state.dataEvento)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }

    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        });
    }

    onConfirm() {
        this.setState(
            {
                confirmation: {
                    ...this.state.confirmation,
                    show: false,
                },
            },
            this.guardarCrudSimple()
        );
    }

    render() {
        return (
            <Container id="crudSimple-crear-container">
                <MessagePrompt
                    text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage}
                />
                <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />

                <Row>
                    <h1>Editar</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.titulo}
                                onChange={(e) => this.setValue('titulo', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Tipo evento</Form.Label>
                            <Form.Select
                                type
                                value={this.state.dataEvento.id_tipo}
                                onChange={(e) => this.setValue('id_tipo', parseInt(e.target.value))}>

                                {
                                    this.state.listaTipoEventos.map((tipo) => (
                                        <option value={tipo._id} key={tipo._id}>
                                            {tipo.tipoEvento}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                        {
                            this.state.dataEvento.id_tipo != 1 ? (
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Lugar evento</Form.Label>
                                    <Form.Control
                                        value={this.state.dataEvento.lugar}
                                        onChange={(e) => this.setValue('lugar', e.target.value)}
                                        required={this.state.dataEvento.id_tipo === 1 ? false : true}
                                    />
                                </Form.Group>
                            ) : (<></>)
                        }
                        {
                            this.state.dataEvento.id_tipo != 2 ? (
                                <Form.Group className="mb-3" controlId="formBasic">
                                    <Form.Label>Url evento</Form.Label>
                                    <Form.Control
                                        value={this.state.dataEvento.url}
                                        onChange={(e) => this.setValue('url', e.target.value)}
                                        required={this.state.dataEvento.id_tipo === 2 ? false : true}
                                    />
                                </Form.Group>
                            ) : (<></>)
                        }
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Categoria evento</Form.Label>
                            <Form.Select
                                value={this.state.dataEvento.id_categoria}
                                onChange={(e) => this.setValue('id_categoria', parseInt(e.target.value))}>
                                {
                                    this.state.listaCategoriaEventos.map((cat) => (
                                        <option value={cat._id} key={cat._id}>
                                            {cat.categoria}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Sucursal</Form.Label>
                            <Form.Select
                                type
                                value={this.state.dataEvento.id_tipo}
                                onChange={(e) => this.setValue('id_sucursal', parseInt(e.target.value))}>
                                {
                                    this.state.listaSucursales.map((sucursal) => (
                                        <option value={sucursal._id} key={sucursal._id}>
                                            {sucursal.nombre}
                                        </option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Puntos necesarios</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.valor_puntos}
                                onChange={(e) => this.setValue('valor_puntos', e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Cupos ofertados</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.cupo}
                                onChange={(e) => this.setValue('cupo', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Fecha Inicio</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.fecha_inicio}
                                min="2021-12-01T00:00"
                                max="2023-01-01T00:00"
                                type="datetime-local"
                                onChange={(e) => this.setValue('fecha_inicio', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Fecha Fin</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.fecha_fin}
                                min="2021-12-01T00:00"
                                max="2023-01-01T00:00"
                                type="datetime-local"
                                onChange={(e) => this.setValue('fecha_fin', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre foto</Form.Label>
                            <Form.Control
                                value={this.state.dataEvento.path_foto}
                                onChange={(e) => this.setValue('cupo', e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>El evento esta disponible?</Form.Label>
                            <Form.Select
                                value={this.state.dataEvento.disponible}
                                onChange={(e) => this.setValue('disponible', e.target.value)}>
                                <option value={true}>Disponible</option>
                                <option value={false}>Oculto</option>
                            </Form.Select>
                        </Form.Group>
                        <Button
                            variant="primary"
                            onClick={() =>
                                this.setState({
                                    confirmation: { ...this.state.confirmation, show: true },
                                })
                            }
                        >
                            Guardar
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}
