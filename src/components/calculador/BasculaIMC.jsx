import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import bascula from './../../imagenes/bascula-dibujo.png'
export default class BasculaIMC extends Component {
    render() {
        return (
            <div>
                <Image src={bascula} fluid/>
            </div>
        )
    }
}
