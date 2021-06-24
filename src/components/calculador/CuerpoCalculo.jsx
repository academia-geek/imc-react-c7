import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Formulario from './FormularioCalculo'
import VerImc from './VerIMC'
import BasculaIMC from './BasculaIMC'

function CuerpoCalculo (prosp) {
  return (
    <Card.Body>
      <Row>
        <Col>
          <Formulario
            nombre='carlos'
            edad={20}
            casado={true}
            calcularEdad={() => console.log('Calculando edad')}
          />
        </Col>
        <Col style={{margin:"auto"}}>
            <VerImc/>
        </Col>
        <Col>
            <BasculaIMC/>
        </Col>
      </Row>
    </Card.Body>
  )
}

export default CuerpoCalculo
