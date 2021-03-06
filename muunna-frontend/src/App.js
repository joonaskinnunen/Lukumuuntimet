import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import BinToDecCon from './components/Conversion/BinToDecCon'
import DecToBinCon from './components/Conversion/DecToBinCon'
import DecToHexCon from './components/Conversion/DecToHexCon'
import DecToOctCon from './components/Conversion/DecToOctCon'
import PercDecCon from './components/Conversion/PercDecCon'
import DecPercCon from './components/Conversion/DecPercCon'
import Useful from './components/Useful/Useful'
import CharCount from './components/Useful/CharCount'
import VatCount from './components/Finance/VatCount'
import BMICalc from './components/Health/BMICalc'
import Home from './components/Home'
import Footer from './components/Footer'
import Finance from './components/Finance/Finance'
import ExchangeRates from './components/Finance/ExchangeRates'
import Health from './components/Health/Health'
import Conversion from './components/Conversion/Conversion'
import LengthCon from './components/Conversion/LengthCon'
import Math from './components/Math/Math'
import PercentCalc from './components/Math/PercentCalc'
import ShoeSizeCon from './components/Conversion/ShoeSizeCon'
import CelcFahrCon from './components/Conversion/CelcFahrCon'
import FahrCelcCon from './components/Conversion/FahrCelcCon'
import Multiplication from './components/Math/Multiplication'
import AdditionTable from './components/Math/AdditionTable'
import ContactForm from './components/ContactForm'
import UrlNotFound from './components/UrlNotFound'
import ScrollToTop from './ScrollToTop'

function App() {
  const containerStyle = {
    backgroundColor: '#fafafa'
  }
  return (
    <Container style={containerStyle} className="mb-5">
      <Router>
        <Row className="mb-5" style={{marginBottom: '1rem !important'}}>
          <Col lg={true}>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <ScrollToTop>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/matematiikka" render={() => <Math />} />
              <Route exact path="/matematiikka/prosenttilaskuri" render={() => <PercentCalc />} />
              <Route exact path="/matematiikka/kertotaulu" render={() => <Multiplication />} />
              <Route exact path="/matematiikka/yhteenlasku" render={() => <AdditionTable />} />
              <Route exact path="/yksikkomuuntimet/binaari-desimaali-muunnin" render={() => <BinToDecCon />} />
              <Route exact path="/yksikkomuuntimet/desimaali-binaari-muunnin" render={() => <DecToBinCon />} />
              <Route exact path="/yksikkomuuntimet/desimaali-heksadesimaali-muunnin" render={() => <DecToHexCon />} />
              <Route exact path="/yksikkomuuntimet/desimaali-oktaaliluku-muunnin" render={() => <DecToOctCon />} />
              <Route exact path="/yksikkomuuntimet/prosentti-desimaalimuunnin" render={() => <PercDecCon />} />
              <Route exact path="/yksikkomuuntimet/desimaali-prosenttilukumuunnin" render={() => <DecPercCon />} />
              <Route exact path="/yksikkomuuntimet/kengankoko-muunnin" render={() => <ShoeSizeCon />} />
              <Route exact path="/yksikkomuuntimet/celsius-fahrenheit-muunnin" render={() => <CelcFahrCon />} />
              <Route exact path="/yksikkomuuntimet/fahrenheit-celsius-muunnin" render={() => <FahrCelcCon />} />
              <Route exact path="/hyoty" render={() => <Useful />} />
              <Route exact path="/hyoty/merkki-ja-sanalaskuri" render={() => <CharCount />} />
              <Route exact path="/raha" render={() => <Finance />} />
              <Route exact path="/raha/alv-laskuri" render={() => <VatCount />} />
              <Route exact path="/raha/valuuttalaskuri" render={() => <ExchangeRates />} />
              <Route exact path="/terveys" render={() => <Health />} />
              <Route exact path="/terveys/painoindeksilaskuri" render={() => <BMICalc />} />
              <Route exact path="/yksikkomuuntimet" render={() => <Conversion />} />
              <Route exact path="/yksikkomuuntimet/pituusmuunnin" render={() => <LengthCon />} />
              <Route exact path="/ota-yhteytta" render={() => <ContactForm />} />
              <Route component={UrlNotFound} />
            </Switch>
            </ScrollToTop>
          </Col>
          <Col xs={12} md={4}>
            <Sidebar />
          </Col>
        </Row>
        <hr />
        <hr />
        <p style={{ marginTop: '20px' }}>Löysitkö virheen sivustolta? Haluatko antaa palautetta? <Link to="/ota-yhteytta">Ota yhteyttä meihin tästä</Link>.</p>
        <Footer />
      </Router>
    </Container>
  )
}

export default App;
