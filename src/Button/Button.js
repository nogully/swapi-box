import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className='Button'>
      <button onClick={props.function} 
              className={'button ' + props.buttonType} name={props.name}> 
        {props.buttonText}
      </button>
    </div>
  )
}

export default Button;
