import React, {useState} from 'react'

import './Question.css'

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Question = ({title, info, id}) => {

    const [showtext, setShowtext] = useState(false)

    

  return (
        <div className='title'
            key={id}
        >
            <div className='divs'>
                <h3>{title}</h3>
                {showtext && <p className='info'>{info}</p>}
            </div>
            <button onClick={() => setShowtext(!showtext)} className='dugme'>{showtext ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </div> 
  )
}

export default Question