import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export default class Listado extends Component {
    constructor(props){
        super()

    }

    render() {
        return (
            <div>
                Nombre : {this.props.nombre}<br/>
                Edad : {this.props.edad}
            </div>
        )
    }
}

Listado.propTypes = {
    nombre : PropTypes.node, 
    edad : PropTypes.number,
    listado : PropTypes.array
} 