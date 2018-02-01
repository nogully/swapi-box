import React from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {
  console.log(props)
  const cards = props.people.map((person, index) => {
    return (
      <Card name={ person.name } 
            homeworld={ person.homeworld } 
            species={ person.species } 
            population={ person.population } />
      )
  })

  return (
    <div class="CardContainer">
      { cards }
    </div>
  )

}

export default CardContainer;