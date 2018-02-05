import React from 'react';
import './Welcome.css'
import PropTypes from 'prop-types'

const Welcome = ({ randomFilm }) => {
  return (
    <div className="Welcome">
    <div className="fade"></div>

    <section className="star-wars">

      <div className="crawl">

        <div className="title">
          <p>EPISODE {randomFilm.episode_id}</p>
          <h1>{randomFilm.title}</h1>
        </div>
        
        <p>{randomFilm.opening_crawl}</p>

      </div>

    </section>
    </div>
  )

}

Welcome.propTypes = {
  randomFilm: PropTypes.object.isRequired,
}

export default Welcome;