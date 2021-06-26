import Calculador from './components/calculador/CalculadorApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Ingreso from './components/paciente/Ingreso'
import Listado from './components/paciente/Listado'
import { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'

function App () {
  const [visualizarListado, setVisualizarEstado] = useState(true)

  return (
    <Container className='mt-3'>
      <select
        id='desmontaje'
        onChange={e => {
          setVisualizarEstado(e.target.value === 'monte' ? true : false)
        }}
      >
        <option value='monte'>Ver Ingreso</option>
        <option value='desmonte'>Desmontar Ingreso</option>
      </select>
      {/*<Calculador/>
      
      {visualizarListado?<Ingreso pacientes = {[1,2,3]}/>:null}
      
          <Listado nombre = {<p>oscar</p>} edad = {23} listado = {[1,2,3]} />*/}
      <BrowserRouter>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href=''>
                  <Link to='/ingreso-paciente'>Ingreso</Link>
                </Nav.Link>
                <Nav.Link href=''>
                  <Link to='/pacientes'>Paciente</Link>
                </Nav.Link>
                <Nav.Link href=''>
                  <Link to='/calculador-imc'>Calculador</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Redirect from='/' to='/calculador-imc' />
        <Switch>
          <Route
            path='/ingreso-paciente'
            exact
            render={() => {
              return <Ingreso />
            }}
          ></Route>
          <Route path='/pacientes' exact component={Listado}></Route>
          <Route
            path='/calculador-imc'
            exact
            render={() => <Calculador />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </Container>
  )
}

export default App
