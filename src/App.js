import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Game />
      </div>
    )
  }
}

export default App;