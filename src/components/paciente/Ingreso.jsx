import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export default class Ingreso extends Component {
  constructor (props) {
    super()
    this.state = {
      nombre: 'Carlos',
      paciente: {
        documento: '',
        nombres: '',
        apellidos: ''
      }
    }
    this.cambioNombre = this.cambioNombre.bind(this)
  }

  handlerChangePaciente = e => {
    const paciente = this.state.paciente
    paciente[e.target.id] = e.target.value
    this.setState({ paciente: paciente })
  }

  UNSAFE_componentWillMount () {
    console.log('componentWillMount', 'Antes de renderizar')
  }

  cambioNombre (e) {
    console.log(this)
    this.setState({ nombre: document.querySelector('#txtnombre').value })
  }

  cambioNombreV1 = e => {
    console.log(this)
    this.setState({ nombre: document.querySelector('#txtnombre').value })
  }

  hadlerSubmitPaciente = e => {
    console.log(this.state);
    fetch('http://localhost:3000/pacientes',{
        method : "POST",
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(this.state.paciente)
    })
    .then(response => response.json())
    .then(data => {
        alert(`Se creo el paciente con el id ${data.id}`)

    })
    e.preventDefault()
  }

  render () {
    // console.log(this.props);
    // console.log(this.state);
    return (
      <Card>
        <Card.Header>Ingreso de paciente</Card.Header>
        <Card.Body>
          <Form onSubmit={this.hadlerSubmitPaciente}>
            <Form.Group controlId='documento'>
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type='number'
                onKeyUp={this.handlerChangePaciente}
                required
              />
            </Form.Group>
            <Form.Group controlId='nombres'>
              <Form.Label>Nombre(s)</Form.Label>
              <Form.Control
                type='text'
                onKeyUp={this.handlerChangePaciente}
                required
              />
            </Form.Group>
            <Form.Group controlId='apellidos'>
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control
                type='text'
                onKeyUp={this.handlerChangePaciente}
                required
              />
            </Form.Group>
            <Button type='submit'>Enviar</Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount () {
    console.log('componentDidMount', 'Ya se renderizo')
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', 'Se esta actualizando el estado!!!!')
    console.log(nextProps, nextState)
    return true
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate')
    console.log(nextProps, nextState)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate', 'Se actulizo el estado y ya renderizo')
    console.log(prevProps, prevState)
  }

  componentWillUnmount () {
    console.log('El componente se desmonto del DOM')
  }
}
