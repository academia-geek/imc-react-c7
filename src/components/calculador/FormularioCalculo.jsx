import React from 'react'
import { Button, Form } from 'react-bootstrap';

class FormularioCalculo extends React.Component {
  constructor(props){
      super()
      this.state = {
        peso : 0,
        altura : 0
      }
  }

  handlerChangeIMC = (e) => {
    const state = this.state
    state[e.target.id] = e.target.value
    this.setState(state, ()=>{
      this.props.calcularIMC(this.state.peso,this.state.altura)
    })
  }

  render () {
    return (
      <Form>
        <Form.Group controlId = "peso">
            <Form.Label>Peso (kilogramos)</Form.Label>
            <Form.Control type = "number" onKeyUp={this.handlerChangeIMC}/>
        </Form.Group>
        
        <Form.Group controlId = "altura">
            <Form.Label>Altura (metros)</Form.Label>
            <Form.Control type = "number" onKeyUp={this.handlerChangeIMC}/>
        </Form.Group>
        <Button variant="link" onClick={() => this.props.calcularIMC(this.state.peso,this.state.altura)}>Calcular</Button>
      </Form>
    )
  }
}

export default FormularioCalculo
