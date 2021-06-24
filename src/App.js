import Calculador from './components/calculador/CalculadorApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Listado from './components/paciente/Listado'
function App() {
  //JSX
  return (
    <Container className="mt-3">
      <Calculador/>
      
      <Listado pacientes = {[1,2,3]}/>
    </Container>
  );
}

export default App;
