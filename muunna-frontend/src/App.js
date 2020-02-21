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
import DecToOctCon from './components/DecToOctCon'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
    const containerStyle = {
    backgroundColor: '#fafafa'
}
  return (
    <Container style={containerStyle} className="mb-5">
    <Router>
        <Row className="mb-5">
          <Col>
          <Menu />
          </Col>
        </Row>
        <Row>
          <Col xs={8}>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/matematiikka" render={() => <Math />} />
            <Route path="/matematiikka/binaari-desimaali-muunnin/" render={() => <BinToDecCon />} />
            <Route path="/matematiikka/desimaali-binaari-muunnin" render={() => <DecToBinCon />} />
            <Route path="/matematiikka/desimaali-heksadesimaali-muunnin/" render={() => <DecToHexCon />} />
            <Route path="/matematiikka/desimaali-oktaaliluku-muunnin/" render={() => <DecToOctCon />} />
          </Col>
          <Col>
            <Sidebar />
          </Col>
        </Row>
        <Footer />
    </Router>
    </Container>
  )
}

export default App;
