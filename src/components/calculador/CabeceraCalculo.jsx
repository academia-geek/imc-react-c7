import React from 'react'
import { Card } from 'react-bootstrap'

const CabeceraCalculo = props => {
  const { titulo, salirApp } = props
  return (
    <Card.Header>
      <Card.Title className="text-center">{titulo}</Card.Title>
      {/*<button onClick={salirApp}>Salir</button>*/}
    </Card.Header>
  )
}
export default CabeceraCalculo