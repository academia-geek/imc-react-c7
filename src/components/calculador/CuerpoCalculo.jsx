import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Formulario from './FormularioCalculo'
import VerImc from './VerIMC'
import BasculaIMC from './BasculaIMC'

class CuerpoCalculo extends React.Component {
  constructor(props){
    super();
    this.state = {
      imc : 0
    }
  }
  calcularIMC = (peso, altura) => this.setState({imc : (peso/Math.pow(altura,2)).toFixed(2)})
  render () {
    return (
      <Card.Body>
        <Row>
          <Col>
            <Formulario
              calcularIMC = {this.calcularIMC}
              nombre='carlos'
              edad={20}
              casado={true}
              calcularEdad={() => console.log('Calculando edad')}
            />
          </Col>
          <Col style={{ margin: 'auto' }}>
            <VerImc CuerpoCalculoIMC = {this} />
          </Col>
          <Col>
            <BasculaIMC />
          </Col>
        </Row>
      </Card.Body>
    )
  }
}

export default CuerpoCalculo
