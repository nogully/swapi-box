import React from 'react' 
import logo from './Star_Wars_Yellow_Logo.svg'
// import Button from '../Button/Button'
import './Header.css'

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

export default Header;

  //        <Button buttonType='light'
  //               buttonText='people'
  //               buttonFunction={props.fetchData}/>
  //       <Button buttonType='light'
  //               buttonText='planets'
  //               buttonFunction={props.fetchData}/>
  //       <Button buttonType='light'
  //               buttonText='vehicles'
  //               buttonFunction={props.fetchData}/>
  //       <Button buttonType='dark'
  //               buttonText='favorites'
  //               buttonFunction={props.displayFavorites}/>