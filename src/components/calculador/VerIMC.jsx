import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'

export default class VerIMC extends Component {
    render() {
        return (
            <div className="text-center">
                <h2>IMC</h2>
                <Badge className="bg-info text-dark"><h3>24.2</h3></Badge>
            </div>
        )
    }
}
