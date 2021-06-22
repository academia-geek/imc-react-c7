import React from 'react'

const CabeceraCalculo = props => {
  const { titulo, salirApp } = props
  return (
    <section>
      <div>{titulo}</div>
      <button onClick={salirApp}>Salir</button>
    </section>
  )
}
export default CabeceraCalculo
