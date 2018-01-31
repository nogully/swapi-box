import React from 'react';
import Button from '../Button/Button'

const Card = (props) => {
  return (
    <div className="Card">
      <h1>{props.name}</h1>
      <Button buttonType='light'
              buttonText='Favorite'/>
    </div>
  )

}

export default Card;