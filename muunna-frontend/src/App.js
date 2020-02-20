import React from 'react'
import Math from './components/Math'
import './App.css'
import Menu from './components/Menu'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
    <div className="container">
      <Menu />
      <Route exact path="/matematiikka" render={() => <Math />} />
    </div>
    </Router>
    </div>
  )
}

export default App;
