import React, { Component } from 'react'

export default class Listado extends Component {
    
    constructor(props){
        super();
        this.state = {
            nombre : "Carlos"
        }
    }
    
    UNSAFE_componentWillMount(){
        console.log("componentWillMount", "Antes de renderizar");
    }

    cambioNombre(e){
        alert()
     //   this.setState({nombre: document.querySelector("#txtnombre").value})
    }

    render() {
        console.log("Se esta renderizando el listado")
       // console.log(this.props); 
       // console.log(this.state);
        return (
            <div>
                Listado

                Nombre : {this.state.nombre}<br/>

                <input type="text" placeholder="nombre del paciente" id="txtnombre"/>
                <button onClick={() => this.cambioNombre} >Cambio de nombre</button>
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
}
