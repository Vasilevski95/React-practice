import React, {useState} from 'react'
import List from './List'
import './Birthday.css'
import Data from '../data'

const Birthday = () => {

  const [people, setPeople] = useState(Data)

  return (
    <div className='rodjendan'>
        <h1>{people.length} Birthdays today</h1>
        <List people={people}/>
        <button onClick={() => setPeople([])} className='dugme'>CLEAR ALL</button>
    </div>
  )
}

export default Birthday