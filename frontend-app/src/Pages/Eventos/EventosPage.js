import React, { Component } from 'react'
import ListaEventos from './Components/ListaEventos'

import { HOST_API } from '../../config';

export default class EventosPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataEventos: [{
                "id_categoria": 1,
                "id_tipo": 3,
                "id_sucursal": 10106,
                "titulo": "Aerobicos",
                "descripcion": "Aerobicos para mejorar la salud mental, física y laboral. Organiza Bienestar",
                "fecha_inicio": "2021-10-04T20:00",
                "fecha_fin": "2021-10-04T21:30",
                "lugar": "Gimnasio",
                "url": "https://meet.google.com/ocs-yybn-vdu",
                "path_foto": HOST_API + "/images/premios/prem-0011.jpg",
                "cupo": 20,
                "valor_puntos": 80,
                "disponible": true
              }
            ]
        }
    }

    //funcion que actualice

    

    render() {
        return (
            <div>
                <h1>PRÓXIMOS EVENTOS - ACUMULA PUNTOS</h1>
                <ListaEventos dataEventos = {this.state.dataEventos}></ListaEventos>
            </div>
        )
    }
}
