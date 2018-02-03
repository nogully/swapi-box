import React from 'react';
import Button from '../Button/Button'
import './Card.css'

const Card = ({ data, favoriteCard, isActive, key }) => {
  const keys = Object.keys(data).filter( key => key !== 'name')
  const elements = keys.map( (key, index) => {
    return <p key={index}>{`${key} : ${data[key]}`}</p>
  })

  return (
    <article className={ "Card " + isActive } >
      <h1>{ data.name }</h1>

      { elements }
      
      <button onClick={() => favoriteCard(data)} 
              className='light'> 
        favorite
      </button>
    </article>
  )

}

export default Card;

   // <Button buttonType='light'
   //            buttonText='Favorite'
   //            buttonFunction={ favoriteCard }
   //            data={ data }
   //            name={ data.name } />