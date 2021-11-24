import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import ItemEvento from './ItemEvento';


export default class ListaEventos extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className = "">
                {/* ciclo for recorriendo la lista */}
                <ItemEvento dataEvento = {this.props.dataEventos[0]}></ItemEvento>
            </div>
        )
    }
}
