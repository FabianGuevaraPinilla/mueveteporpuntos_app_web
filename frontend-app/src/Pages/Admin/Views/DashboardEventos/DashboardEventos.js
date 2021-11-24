import React, { Component } from 'react'

import FormEventoNuevo from './Components/FormEventoNuevo'

import config from '../../../../config';
import Loading from '../../../../Components/Loading/Loading';

export default class DashboardEventos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaEventos: [],
            listaCategoriaEventos: [],
            listaTipoEventos: [],
            listaSucursales: [],

            isLoadingData: true,
        }
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
        this.setState({isLoadingData: false})
    }

    render() {
        let isLoadingData = this.state.isLoadingData;
        console.log(isLoadingData)
        return (
            <div>
                <h2>nuevo evento</h2>
                <FormEventoNuevo
                    tipoEventos={this.state.listaTipoEventos}
                    categoriaEventos={this.state.listaCategoriaEventos}
                    sucursales={this.state.listaSucursales}
                />
                <h1>{this.state.isLoadingData}</h1>
                <h2>Tabla</h2>
                {!this.state.isLoadingData ? (

                    this.state.listaEventos.map((key, evento) => {
                        <p>{evento.titulo}</p>
                    })

                ) : (<p>Cargando tabla</p>)}

            </div>
        )
    }
}
