import React, {useState} from 'react'

import './Tour.css'

const Tour = ({id, name, info, image, price, removeItem}) => {

  const [showMore, setShowMore] = useState(false)



  return (
    <div className='tour-cards'>
      <img src={image} alt={id}/>
      <div className='paragraphs'>
        <p>{name}</p>
        <p className='price'>${price}</p>
      </div>
      <p
        className='info'>
        {showMore ? info: `${info.substring(0,150)}`}
        <button onClick={() => setShowMore(!showMore)} >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button className='not-interested' onClick={() => removeItem(id)}>NOT INTERESTED</button>
    </div>
  )
}

export default Tour