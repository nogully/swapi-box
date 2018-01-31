import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className='Button'>
      <button onClick={props.fetchData} className={'button ' + props.buttonType}> 
        {props.buttonText}
      </button>
    </div>
  )
}

export default Button;
