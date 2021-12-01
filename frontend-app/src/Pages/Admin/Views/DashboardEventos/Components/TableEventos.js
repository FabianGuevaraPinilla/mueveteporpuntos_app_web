import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { request } from '../../../../../Helper/helper';

import DataGrid from '../../../../../Components/DataGrid/DataGrid';
import ConfirmationPrompt from '../../../../../Components/Prompts/ConfirmationPrompt';
import Loading from '../../../../../Components/Loading/Loading';
import MessagePrompt from '../../../../../Components/Prompts/MessagePrompt';

const columns = [
  {
    dataField: '_id',
    text: 'Id Evento',
    hidden: true,
  },
  {
    dataField: 'titulo',
    text: 'Título',
  },
  {
    dataField: 'categoria',
    text: 'Categoria',
  },
  {
    dataField: 'tipo',
    text: 'Tipo',
  },
  {
    dataField: 'valor_puntos',
    text: 'Puntos Ofrecidos',
  },
];

const urlAPIEventos = "/eventos"

export default class CrudSimpleBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idCurrentEvento: null,
      confirmation: {
        title: 'Eliminar',
        text: '¿Deseas eliminar?',
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  onClickEditButton(row) {
    this.props.setIdCurrentEvento(row._id);

    this.props.changeTab('editar');
  }

  onClickDeleteButton(row) {
    this.setState({
      idCurrentEvento: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
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
      this.eliminarCrudSimple()
    );
  }

  eliminarCrudSimple() {
    this.setState({ loading: true });
    request
      .delete(`${urlAPIEventos}/${this.state.idCurrentEvento}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) this.reloadPage();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <Container id="crudSimple-buscar-container">
        <ConfirmationPrompt
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />

        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />

        <Loading show={this.state.loading} />

        <Row>
          <h1>Buscar</h1>
        </Row>
        <Row>
          <DataGrid
            url={urlAPIEventos}
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
