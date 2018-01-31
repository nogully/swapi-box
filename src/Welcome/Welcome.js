import React from 'react';
import './Welcome.css'

const Welcome = (props) => {
  return (
    <div className="Welcome">
    <div className="fade"></div>

    <section className="star-wars">

      <div className="crawl">

        <div className="title">
          <p>EPISODE {props.crawl.episode_id}</p>
          <h1>{props.crawl.title}</h1>
        </div>
        
        <p>{props.crawl.opening_crawl}</p>

      </div>

    </section>
    </div>
  )

}

export default Welcome;