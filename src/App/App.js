import React, { Component } from 'react';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import './App.css';
import { getPeople, getFilmCrawl } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomFilm: {},
      favorites: []
    }
  }
  fetchData = async (event) => {
    const people = await getPeople()
    this.setState({ people })
  }

  componentDidMount = async () => {
    const randomFilm = await getFilmCrawl()
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
