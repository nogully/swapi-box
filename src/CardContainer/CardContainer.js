import React from 'react';
import Card from '../Card/Card'
import ErrorCard from '../Card/ErrorCard'
import './CardContainer.css'

const CardContainer = ({category, favorites, cardArray, favoriteCard}) => { //refactor to add the whole person obj
  var cards = []
  switch (category) {
    case 'people': 
      cards = cardArray.map((person, index) => {
        const isActive = favorites.includes(person) ? 'active' : ''
        return (
          <Card data={ person }
                favoriteCard={favoriteCard}
                isActive={isActive}
                key={ person.name } />
          ) 
      })
      break;
    case 'planets':
      cards = cardArray.map((planet, index) => {
        const isActive = favorites.includes(planet) ? 'active' : ''
        return (
          <Card data={ planet }
                favoriteCard={favoriteCard}
                isActive={isActive}
                key={ planet.name } />
          ) 
      })
      break;
    case 'vehicles':
      cards = cardArray.map((vehicle, index) => {
        const isActive = favorites.includes(vehicle) ? 'active' : ''
        return (
          <Card data={ vehicle } 
                favoriteCard={ favoriteCard }
                isActive={ isActive }
                key={ vehicle.name } />
          ) 
      })
      break;

    case 'favorites':
      cards = cardArray.map((favorite, index) => {
        const isActive = favorites.includes(favorite) ? 'active' : ''
        return (
          <Card data={ favorite } 
                isActive={isActive} 
                favoriteCard={ favoriteCard }
                key={ favorite.name } />
          ) 
      })
      break;
    default:
     return null;
  }          


  return (
    <div class="CardContainer">
      { cardArray.length ? cards : <ErrorCard /> }
    </div>
  )

}

export default CardContainer;