import React from 'react';
import './Card.css'

const Card = ({ data, favoriteCard, isActive, key }) => {
  const attributes = Object.keys(data).filter( attribute => attribute !== 'name')
  const elements = attributes.map( (attribute, index) => {
    return <p key={index}>{`${attribute} : ${data[attribute]}`}</p>
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
