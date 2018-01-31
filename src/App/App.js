import React, { Component } from 'react';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import './App.css';
import mockData from '../mockData'
import StarWars from '../helper'

const starWarsData = new StarWars();

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomFilm: {},
      favorites: []
    }
  }

  fetchData = (event) => {

  }

  componentDidMount = () => {
    const randomFilm = starWarsData.filmCrawl(mockData.films)
    this.setState({ randomFilm })
  }


  render() {
    return (
      <div className="div">
        <Header buttonType={this.buttonType} buttonText={this.buttonText} fetchData={this.fetchData}/>

        { this.state.people || this.state.vehicles || this.state.planets ?
        <CardContainer  /> : <Welcome randomFilm={this.state.randomFilm} /> 
        }
        
      </div>
    );
  }
}

export default App;
