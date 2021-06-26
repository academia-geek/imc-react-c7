import React, { Component } from 'react'
import PropTypes from 'prop-types'; 
import { Card, Table } from 'react-bootstrap';

export default class Listado extends Component {
    constructor(props){
        super()
        this.state = {
            pacientes : []
        }
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:3000/pacientes')
        const data = await response.json()
        this.setState({pacientes : data})
    }

    render() {
        return (
            <Card>
                <Card.Header>Listado de pacientes</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Documento</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pacientes.map(paciente => <tr>
                                <td>{paciente.id}</td>
                                <td>{paciente.documento}</td>
                                <td>{paciente.nombres}</td>
                                <td>{paciente.apellidos}</td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        )
    }
}

Listado.propTypes = {
    nombre : PropTypes.node, 
    edad : PropTypes.number,
    listado : PropTypes.array
} 