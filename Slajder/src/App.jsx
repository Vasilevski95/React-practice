import { useState } from 'react'
import './App.css'
import data from './data'

import {AiOutlineLeftCircle, AiOutlineRightCircle} from 'react-icons/ai'

function App() {
  const [value, setValue] = useState(0)
  const { image, name, title, quote} = data[value];

  const handleClickRight = () => {
    setValue(value === data.length - 1 ? 0 : value + 1)
  }

  const handleClickLeft = () => {
    setValue(value === 0 ? data.length - 1 : value - 1)
  }

  


  return (
    <div className="App">
      <h1>Reviews</h1>
      <div className='kontejner'>
            <div className='slajder'>
              <img src={image} alt={name}/>
              <h4>{name}</h4>
              <h5>{title}</h5>
              <p>{quote}</p>
            </div>
            <button onClick={handleClickLeft} className='levo-dugme'><AiOutlineLeftCircle/></button>
            <button onClick={handleClickRight} className='desno-dugme'><AiOutlineRightCircle/></button>
      </div>
    </div>
  )
}

export default App
