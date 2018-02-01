import React from 'react';
import Button from '../Button/Button'

const Card = (props) => {
  return (
    <article className="Card">
      <h1>{props.name}</h1>
      <h3>{props.species}</h3>
      <h3>Homeworld: {props.homeworld}</h3>
      <h3>Population: {props.population}</h3>
      <Button buttonType='light'
              buttonText='Favorite'/>
    </article>
  )

}

export default Card;