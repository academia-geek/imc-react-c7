import React, { Component } from 'react'

export default class Ingreso extends Component {
    

    constructor(props){
        super();
        this.state = {
            nombre : "Carlos"
        }
        this.cambioNombre = this.cambioNombre.bind(this)
    }
    
    UNSAFE_componentWillMount(){
        console.log("componentWillMount", "Antes de renderizar");
    }

    cambioNombre(e){
        console.log(this)
        this.setState({nombre: document.querySelector("#txtnombre").value})
    }

    cambioNombreV1 = (e) => {
        console.log(this)
        this.setState({nombre: document.querySelector("#txtnombre").value})
    }

    render() {
       // console.log(this.props); 
       // console.log(this.state);
        return (
            <div>
                Listado

                Nombre : {this.state.nombre}<br/>

                <input type="text" placeholder="nombre del paciente" id="txtnombre"/>
                <button onClick={this.cambioNombreV1} >Cambio de nombre</button>
            </div>
        )
    }

    componentDidMount(){
        console.log("componentDidMount", "Ya se renderizo")
    }

    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate", "Se esta actualizando el estado!!!!")
        console.log(nextProps,nextState);
        return true
    }

    componentWillUpdate(nextProps,nextState){
        console.log("componentWillUpdate");
        console.log(nextProps,nextState);
    }

    componentDidUpdate(prevProps,prevState) {
        console.log("componentDidUpdate", "Se actulizo el estado y ya renderizo")
        console.log(prevProps,prevState)
    }

    componentWillUnmount(){
        console.log("El componente se desmonto del DOM")
    }
}
