import React from 'react';
import logo from './logo.svg';
import Math from './components/Math'
import './App.css';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
    <div  class="container">
      <Menu />
      <Math />
    </div>
    </div>
  );
}

export default App;
