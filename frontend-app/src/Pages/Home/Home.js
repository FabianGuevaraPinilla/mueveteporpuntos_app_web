import React, { Component } from 'react'
import { HOST_API } from '../../config'

export default class Home extends Component {
    componentDidMount(){
        console.log("home montado")
    }
    render() {
        return (
            <div>
                <img src = { HOST_API + "/images/premios/prem-0011.jpg"} ></img>
                <h1>Home</h1>
            </div>
        )
    }
}