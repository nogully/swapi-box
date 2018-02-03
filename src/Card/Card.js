import React from 'react';
import Button from '../Button/Button'
import './Card.css'

const Card = (props) => {

  return (
    <article className={"Card " + props.active} >
      <h1>{props.name}</h1>
      <h3>{props.species}</h3>
      <h3>{props.homeworld}</h3>
      <p>{props.population}</p>
      <p>{props.terrain}</p>
      <p>{props.climate}</p>
      <p>{props.residents}</p>
      <p>{props.model}</p>
      <p>{props.vehicle_class}</p>
      <p>{props.passengers}</p>
      <Button buttonType='light'
              buttonText='Favorite'
              function={props.favoriteCard}
              name={props.name} />
    </article>
  )

}

export default Card;