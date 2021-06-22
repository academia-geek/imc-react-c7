import React from 'react'
import Cabecera from './CabeceraCalculo'
import Cuerpo from './CuerpoCalculo'

export default function CalculadorApp() {

    const salir = () => {
        console.log("Esta saliendo de la aplicación")
    }

    return (
        <div>
            <Cabecera titulo = "Calculadora" salirApp = {salir}/>
            <Cuerpo></Cuerpo>
        </div>
    )
}
