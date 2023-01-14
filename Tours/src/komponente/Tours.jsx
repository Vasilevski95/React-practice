import React from 'react'
import Tour from './Tour'
import './Tours.css'

const Tours = ({tours, removeItem}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <hr />
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeItem={removeItem}/>
        }
      )}
    </div>
  </section>;
};

export default Tours