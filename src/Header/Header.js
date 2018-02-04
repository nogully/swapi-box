import React from 'react' 
import logo from './Star_Wars_Yellow_Logo.svg'
import './Header.css'
import PropTypes from 'prop-types';

const Header = ({ fetchData, displayFavorites }) => {
  return (
    <div className="Header"> 
      <img src={ logo } className="logo" alt='Star Wars Logo' />
      <div className="button-wrapper">
        <button className='light'
                onClick={fetchData}>people</button>
        <button className='light'
                onClick={fetchData}>planets</button>
        <button className='light'
                onClick={fetchData}>vehicles</button>
        <button className='dark'
                onClick={displayFavorites}>favorites</button>
      </div>
    </div>
  )
}

Header.propTypes = {
  fetchData: PropTypes.func.isRequired,
  displayFavorites: PropTypes.func.isRequired
}

export default Header;