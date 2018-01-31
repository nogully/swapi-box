import React, { Component } from 'react';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import './App.css';
import mockData from '../mockData'
import StarWars from '../helper'

const starWarsData = new StarWars(mockData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawl: '',
      favorites: []
    }
  }

  callApi = () => {

  }

  componentDidMount = () => {
    const randomCrawl = starWarsData.filmCrawl(0)
    this.setState({crawl: randomCrawl})
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  render() {
    return (
      <div className="div">
        <Header buttonType={this.buttonType} buttonText={this.buttonText} />

        { this.state.people || this.state.vehicles || this.state.planets == '' ?
        <CardContainer  /> : <Welcome crawl={this.state.crawl} /> 
        }
        
      </div>
    );
  }
}

export default App;
