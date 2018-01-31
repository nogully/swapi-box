import React from 'react' 
import logo from './Star_Wars_Yellow_Logo.svg'
import Button from '../Button/Button'
import './Header.css'

const Header = (props) => {
  return (
    <div className="Header"> 
      <img src={logo} className="logo" alt='Star Wars Logo' />
      <div className="button-wrapper">
        <Button buttonType='light'
                buttonText='People'/>
        <Button buttonType='light'
                buttonText='Planets'/>
        <Button buttonType='light'
                buttonText='Vehicles'/>
        <Button buttonType='dark'
                buttonText='Favorites'/>
      </div>
    </div>
  )
}

export default Header;