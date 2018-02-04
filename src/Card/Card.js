import React from 'react';
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ data, favoriteCard, isActive }) => {
  const attributes = Object.keys(data).filter( attribute => attribute !== 'name')
  const elements = attributes.map( (attribute) => {
    return <p key={attribute}>{`${attribute} : ${data[attribute]}`}</p>
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

Card.propTypes = {
  data: PropTypes.object.isRequired,
  favoriteCard: PropTypes.func.isRequired,
  isActive: PropTypes.string.isRequired, 
}

export default Card;
