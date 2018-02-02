import React from 'react';
import Card from '../Card/Card'
import './CardContainer.css'

const CardContainer = (props) => {
  var cards = []
  switch (props.category) {
    case 'people': 
      cards = props.cardArray.map((person, index) => {
        const isActive = props.favorites.includes(person.name) ? 'active' : ''
        return (
          <Card name={ person.name } 
                homeworld={ person.homeworld } 
                species={ person.species } 
                population={ person.population }
                favoriteCard={props.favoriteCard}
                active={isActive}
                key={ person.name } />
          ) 
      })
      break;
    case 'planets':
      cards = props.cardArray.map((planet, index) => {
        const isActive = props.favorites.includes(planet.name) ? 'active' : ''
        return (
          <Card name={ planet.name } 
                species={ planet.species } 
                population={ planet.population }
                residents={ planet.residents }
                climate={ planet.climate }
                terrain={ planet.terrain }
                favoriteCard={props.favoriteCard}
                active={isActive}
                key={ planet.name } />
          ) 
      })
      break;
    default:
     console.log('CardContainer switch case hates you');
     return null;
  }

  return (
    <div class="CardContainer">
      { cards }
    </div>
  )

}

export default CardContainer;