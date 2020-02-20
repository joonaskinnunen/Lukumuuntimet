import React from 'react'
import Math from './components/Math'
import './App.css'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BinToDecCon from './components/BinToDecCon'
import DecToBinCon from './components/DecToBinCon'
import DecToHexCon from './components/DecToHexCon'

function App() {
  return (
    <Container>
    <Router>
    <Menu />
    <div>
        <Row className="mt-5">
          <Col>
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Route exact path="/matematiikka" render={() => <Math />} />
            <Route path="/matematiikka/binaari-desimaali-muunnin/" render={() => <BinToDecCon />} />
            <Route path="/matematiikka/desimaali-binaari-muunnin" render={() => <DecToBinCon />} />
            <Route path="/matematiikka/desimaali-heksadesimaali-muunnin/" render={() => <DecToHexCon />} />
          </Col>
          <Col>
            <Sidebar />
          </Col>
        </Row>
    </div>
    </Router>
    </Container>
  )
}

export default App;
