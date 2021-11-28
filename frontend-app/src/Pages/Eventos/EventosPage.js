import React, { Component } from "react";
import ListaEventos from "./Components/ListaEventos";

import { HOST_API } from "../../config";
import { Container } from "react-bootstrap";

export default class EventosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEventos: [
        {
          _id: "6161c2eb0936154b7e61436f",
          id_categoria: 1,
          id_tipo: 3,
          id_sucursal: 10106,
          titulo: "Aerobicos",
          descripcion:
            "Aerobicos para mejorar la salud mental, física y laboral. Organiza Bienestar",
          fecha_inicio: "2021-10-04T20:00",
          fecha_fin: "2021-10-04T21:30",
          lugar: "Gimnasio",
          url: "https://meet.google.com/ocs-yybn-vdu",
          path_foto: "even_0001.jpg",
          cupo: 20,
          valor_puntos: 80,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614370",
          id_categoria: 1,
          id_tipo: 3,
          id_sucursal: 10105,
          titulo: "Rumba Terapia",
          descripcion: "Sesión de rumba terapia, diviertase con buena música.",
          fecha_inicio: "2021-10-21T20:00",
          fecha_fin: "2021-10-21T21:30",
          lugar: "Gimnasio",
          url: "https://meet.google.com/ocs-yybn-vdu",
          path_foto: "even_0014.jpg",
          cupo: 20,
          valor_puntos: 80,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614371",
          id_categoria: 1,
          id_tipo: 2,
          id_sucursal: 10112,
          titulo: "CrossFIit",
          descripcion:
            "Entrenamiento con instructor para fortalecer la masa muscular.",
          fecha_inicio: "2021-10-08T10:00",
          fecha_fin: "2021-10-08T11:30",
          lugar: "Gimnasio",
          path_foto: "even_0013.jpg",
          cupo: 20,
          valor_puntos: 120,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614372",
          id_categoria: 2,
          id_tipo: 2,
          id_sucursal: 10120,
          titulo: "Festival de Ópera al Parque",
          descripcion:
            "Grupo ensamble The brothers, junto a Andreas Pierde interpretando temas icónicos del bárroco.",
          fecha_inicio: "2021-10-15T19:30",
          fecha_fin: "2021-10-15T21:30",
          lugar: "Teatro",
          path_foto: "even_0011.jpg",
          cupo: 10,
          valor_puntos: 200,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614373",
          id_categoria: 2,
          id_tipo: 2,
          id_sucursal: 10102,
          titulo: "Feria de Arte Moderno",
          descripcion: "Exposición de arte de diferentes artistas.",
          fecha_inicio: "2021-10-19T13:30",
          fecha_fin: "2021-10-19T19:30",
          lugar: "Biblioteca",
          path_foto: "even_0015.jpg",
          cupo: 10,
          valor_puntos: 200,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614374",
          id_categoria: 2,
          id_tipo: 2,
          id_sucursal: 10105,
          titulo: "Autocine",
          descripcion:
            "Presentación de película en pantalla grande que puedes disfrutar desde tu carro.",
          fecha_inicio: "2021-10-21T19:30",
          fecha_fin: "2021-10-21T22:30",
          lugar: "Parqueadero",
          path_foto: "even_0016.jpg",
          cupo: 15,
          valor_puntos: 150,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614375",
          id_categoria: 3,
          id_tipo: 1,
          id_sucursal: 10111,
          titulo: "Foro de Emprendimiento Digital",
          descripcion:
            "Foro dirigido para conocer herramientas y elementos para emprender digitalmente.",
          fecha_inicio: "2021-10-22T13:30",
          fecha_fin: "2021-10-22T16:30",
          url: "https://meet.google.com/ocs-yybn-vdu",
          path_foto: "even_0009.jpg",
          cupo: 10,
          valor_puntos: 85,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614376",
          id_categoria: 3,
          id_tipo: 1,
          id_sucursal: 10109,
          titulo: "Capacitación Microsoft Office 365",
          descripcion:
            "Capacitación en el manejo de las diferentes herramientas de Office 365 para el desarrollo de las diferentes tareas laborales.",
          fecha_inicio: "2021-10-24T13:30",
          fecha_fin: "2021-10-24T15:30",
          url: "https://meet.google.com/ocs-yybn-vdu",
          path_foto: "even_0017.jpg",
          cupo: 15,
          valor_puntos: 150,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614377",
          id_categoria: 3,
          id_tipo: 2,
          id_sucursal: 10108,
          titulo: "Taller de Papiroflexia para Niños",
          descripcion:
            "Taller práctico para enseñarle a los más pequeños el arte del origami, aprenderan dobleces y figuras divertidas.",
          fecha_inicio: "2021-10-26T13:30",
          fecha_fin: "2021-10-26T16:30",
          lugar: "Biblioteca",
          path_foto: "even_0018.jpg",
          cupo: 15,
          valor_puntos: 130,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614378",
          id_categoria: 4,
          id_tipo: 3,
          id_sucursal: 10103,
          titulo: "Concierto Música Colombiana",
          descripcion:
            "Recorrido musical de las diferentes regiones por medio de la interpretación del grupo musical de la casa de la cultura del municipio.",
          fecha_inicio: "2021-10-28T19:30",
          fecha_fin: "2021-10-28T22:30",
          lugar: "Teatro",
          url: "https://meet.google.com/ocs-yybn-vdu",
          path_foto: "even_0008.jpg",
          cupo: 10,
          valor_puntos: 220,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e614379",
          id_categoria: 4,
          id_tipo: 2,
          id_sucursal: 10124,
          titulo: "Salida Parque Acuatico",
          descripcion:
            "Pase para 3 personas al parque acuático de la ciudad, no incluye alimentación.",
          fecha_inicio: "2021-10-22T9:30",
          fecha_fin: "2021-10-22T14:30",
          lugar: "Parque acuatico",
          path_foto: "even_0019.jpg",
          cupo: 15,
          valor_puntos: 220,
          disponible: true,
        },
        {
          _id: "6161c2eb0936154b7e61437a",
          id_categoria: 4,
          id_tipo: 2,
          id_sucursal: 10108,
          titulo: "Recorrido en Ruta - Ciclismo",
          descripcion:
            "Recorrido desde el parque principal hasta la vereda La Caucasia, se recomienda llevar agua.",
          fecha_inicio: "2021-10-30T5:30",
          fecha_fin: "2021-10-30T10:30",
          lugar: "Salida ciudad",
          path_foto: "even_0007.jpg",
          cupo: 15,
          valor_puntos: 220,
          disponible: true,
        },
      ],
    };
  }

  //funcion que actualice

  render() {
    return (
      <Container className="eventos_page__container">
        <h1>PRÓXIMOS EVENTOS - ACUMULA PUNTOS</h1>
        <ListaEventos dataEventos={this.state.dataEventos}></ListaEventos>
      </Container>
    );
  }
}
