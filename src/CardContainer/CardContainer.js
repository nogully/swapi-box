import React from 'react';
import Card from '../Card/Card'
import ErrorCard from '../Card/ErrorCard'
import './CardContainer.css'
import PropTypes from 'prop-types'

const CardContainer = ({ category, favorites, cardArray, favoriteCard}) => { 
  const cards = cardArray.map((card, index) => {
    const isActive = favorites.includes(card) ? 'active' : '';
    return (
      <Card data={ card }
            favoriteCard={favoriteCard}
            isActive={isActive}
            key={ index } />
    ) 
  })          

  return (
    <div class="CardContainer">
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