import React from 'react'
import { Card } from 'react-bootstrap'
import Cabecera from './CabeceraCalculo'
import Cuerpo from './CuerpoCalculo'

export default function CalculadorApp() {

    const salir = () => {
        console.log("Esta saliendo de la aplicación")
    }

    return (
        <Card>
            <Cabecera titulo = "Calculadora" salirApp = {salir}/>
            <Cuerpo></Cuerpo>
        </Card>
    )
}
