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

  fetchData = async (event) => {
    const people = await starWarsData.cleanPeople(mockData.people);
    this.setState({ people: people })
  }

  componentDidMount = () => {
    const randomFilm = starWarsData.filmCrawl(mockData.films)
    this.setState({ randomFilm })
  }

  favoriteCard = (event) => {
    const favCardKey = event.target.name;
    if (!this.state.favorites.includes(favCardKey)) {
      this.setState({ favorites: [...this.state.favorites, favCardKey] })
    } else {
      this.setState({ favorites: [...this.state.favorites.filter(key => !favCardKey)]})
    }
  }


  render() {
    return (
      <div className="div">
        <Header buttonType={this.buttonType} buttonText={this.buttonText} fetchData={this.fetchData}/>

        { this.state.people || this.state.vehicles || this.state.planets ?
        <CardContainer favoriteCard={this.favoriteCard} favorites={this.state.favorites} people={this.state.people} /> : <Welcome randomFilm={this.state.randomFilm} /> 
        }
        
      </div>
    );
  }
}

export default App;
