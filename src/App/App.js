import React, { Component } from 'react';
import Header from '../Header/Header.js'
import CardContainer from '../CardContainer/CardContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="div">
        <Header />
        <h1 className="App-title">Explore Star Wars</h1>
        <CardContainer />
      </div>
    );
  }
}

export default App;
