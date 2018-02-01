import React from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {

  const cards = props.people.map((person, index) => {
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

  return (
    <div class="CardContainer">
      { cards }
    </div>
  )

}

export default CardContainer;