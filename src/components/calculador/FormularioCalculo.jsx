import React from 'react'
import { Button, Form } from 'react-bootstrap';

class FormularioCalculo extends React.Component {
  constructor(props){
      super()
      console.log(props);
      this.nombre = "Carlos"
  }

  render () {
    return (
      <Form>
        Nombre : {this.props.nombre}
        <Form.Group controlId = "peso">
            <Form.Label>Peso (kilos)</Form.Label>
            <Form.Control type = "number"/>
        </Form.Group>
        
        <Form.Group controlId = "altura">
            <Form.Label>Altura (cm)</Form.Label>
            <Form.Control type = "number"/>
        </Form.Group>
        <Button variant="link" onClick={() => alert("Calculando IMC")}>Calcular</Button>
      </Form>
    )
  }
}

export default FormularioCalculo
