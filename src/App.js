import Calculador from './components/calculador/CalculadorApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  //JSX
  return (
    <Container className="mt-3">
      <Calculador/>
    </Container>
  );
}

export default App;
