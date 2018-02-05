import React, { Component } from 'react';
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import Welcome from '../Welcome/Welcome'
import './App.css';
import { getPeople, 
         getFilmCrawl, 
         getPlanets, 
         getVehicles, 
         getRandomInt } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      randomFilm: {},
      favorites: []
    }
  }

  componentDidMount = async () => {
    const randomNumber = getRandomInt()
    const randomFilm = await getFilmCrawl(randomNumber)
    this.setState({ randomFilm })
  }

  fetchData = async (event) => {
    switch (event.target.textContent) {
      case 'people': 
        if (!this.state.people) {
          const people = await getPeople()
          this.setState({ people, category: 'people' })
        } else { 
          this.setState({category: 'people'}) 
        }
        break;
      case 'planets':
        if (!this.state.planets) {
          const planets = await getPlanets()
          this.setState({ planets, category: 'planets' })
        } else { 
          this.setState({category: 'planets'}) 
        }
        break;
      case 'vehicles':
        if (!this.state.vehicles) {
          const vehicles = await getVehicles()
          this.setState({ vehicles, category: 'vehicles' })
        } else { 
          this.setState({category: 'vehicles'}) 
        }
        break;
      default:
        break;
    }
  }

  favoriteCard = (card) => {
    if (!this.state.favorites.includes(card)) {
      this.setState({ 
        favorites: [...this.state.favorites, card] })
    } else {
      this.setState({ 
        favorites: [...this.state.favorites.filter(favorite => favorite !== card)] })
    }
  }

  displayFavorites = (event) => { 
    const category = 'favorites'
    this.setState({ category })
  }

  render() {
    return (
      <div className="div">
        <Header buttonType={this.buttonType} 
                buttonText={this.buttonText} 
                fetchData={this.fetchData} 
                displayFavorites={this.displayFavorites}/>

        { this.state.people || this.state.vehicles 
          || this.state.planets || (this.state.category === 'favorites') ?
          <CardContainer favoriteCard={this.favoriteCard} 
                         favorites={this.state.favorites} 
                         category={this.state.category} 
                         cardArray={this.state[this.state.category]} /> 

                         : <Welcome randomFilm={this.state.randomFilm} /> 
        }
      </div>
    );
  }
}

export default App;
