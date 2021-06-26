import React, { Component } from 'react'
import { Badge } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CuerpoCalculo from './CuerpoCalculo'

export default class VerIMC extends Component {
    render() {
        const { CuerpoCalculoIMC } = this.props
        return (
            <div className="text-center">
                <h2>IMC</h2>
                <Badge className="bg-info text-dark"><h3>{CuerpoCalculoIMC.state.imc}</h3></Badge>
            </div>
        )
    }
}

/*
VerIMC.propTypes = {
    CuerpoCalculoIMC : PropTypes.instanceOf(CuerpoCalculo).isRequired
}*/