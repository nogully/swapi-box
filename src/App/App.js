import React, { Component } from 'react';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import './App.css';
import { getPeople, getFilmCrawl, getPlanets, getVehicles } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomFilm: {},
      favorites: []
    }
  }

  fetchData = async (event) => {
    console.log(event.target.textContent)
    switch (event.target.textContent) {
      case 'People': 
        if (!this.state.people) {
          const people = await getPeople()
          this.setState({ 
            randomFilm: this.state.randomFilm,
            favorites: this.state.favorites, 
            people: people,
            category: 'people' })
        } else { this.setState({category: 'people'}) }
        break;
      case 'Planets':
        if (!this.state.planets) {
          const planets = await getPlanets()
          this.setState({ randomFilm: this.state.randomFilm,
            favorites: this.state.favorites, 
            planets: planets,
            category: 'planets' })
        } else { this.setState({category: 'planets'}) }
        break;
      case 'Vehicles':
        if (!this.state.vehicles) {
          const vehicles = await getVehicles()
          this.setState({ randomFilm: this.state.randomFilm,
            favorites: this.state.favorites, 
            vehicles: vehicles,
            category: 'vehicles' })
        } else { this.setState({category: 'vehicles'}) }
        break;
      default: console.log('error')
    }
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

  displayFavorites = () => {
    // if (this.state.favorites.length) {
    //   return 
    // } else {

    // }
    console.log(this.state.favorites)
  }


  render() {

    return (
      <div className="div">
        <Header buttonType={this.buttonType} buttonText={this.buttonText} fetchData={this.fetchData} displayFavorites={this.displayFavorites}/>

        { this.state.people || this.state.vehicles || this.state.planets ?
        <CardContainer favoriteCard={this.favoriteCard} favorites={this.state.favorites} category={this.state.category} cardArray={this.state[this.state.category]} /> : <Welcome randomFilm={this.state.randomFilm} /> 
        }
        
      </div>
    );
  }
}

export default App;
