import Calculador from './components/calculador/CalculadorApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Ingreso from './components/paciente/Ingreso'
import Listado from './components/paciente/Listado'
import { useState } from 'react';

function App() {
  const [visualizarListado, setVisualizarEstado] = useState(false)
  
  return (
    <Container className="mt-3">
      <select id = "desmontaje" onChange={(e) => { setVisualizarEstado(e.target.value === "monte"?true:false) }}>
        <option value = "monte">Ver Ingreso</option>
        <option value = "desmonte">Desmontar Ingreso</option>
      </select>
      <Calculador/>
      
      {visualizarListado?<Ingreso pacientes = {[1,2,3]}/>:null}
      
      <Listado nombre = {<p>oscar</p>} edad = {23} listado = {{nombre:"oscar"}} />
    </Container>
  );
}

export default App;
