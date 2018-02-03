import React from 'react';

const ErrorCard = ({ data, favoriteCard, isActive, key }) => {
  const attributes = Object.keys(data).filter( attribute => attribute !== 'name')
  const elements = attributes.map( (attribute, index) => {
    return <p key={index}>{`${attribute} : ${data[attribute]}`}</p>
  })

  return (
    <article className={ "Error " } >
      <h1>Error</h1>
      <p>There are no favorites</p>
    </article>
  )

}

export default ErrorCard;
