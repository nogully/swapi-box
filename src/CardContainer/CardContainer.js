import React from 'react';
import Card from '../Card/Card'
import ErrorCard from '../Card/ErrorCard'
import './CardContainer.css'
import PropTypes from 'prop-types'

const CardContainer = ({ category, cardArray, favorites, favoriteCard}) => { 
  const cards = cardArray.map( card => {
    const isActive = favorites.includes(card) ? 'active' : '';
    return (
      <Card data={ card }
            favoriteCard={favoriteCard}
            isActive={isActive}
            key={ card.name } />
    ) 
  })          

  return (
    <div className="CardContainer">
      { category === 'favorites' && !favorites.length ? <ErrorCard /> : null }
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  category: PropTypes.string.isRequired,
  cardArray: PropTypes.array.isRequired,
  favoriteCard: PropTypes.func.isRequired, 
  favorites: PropTypes.array.isRequired
}

export default CardContainer;