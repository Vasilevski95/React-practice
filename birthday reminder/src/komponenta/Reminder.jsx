import React, {useState} from 'react'
import './Reminder.css'
import Data from '../data'
import List from './List'




const Reminder = () => {

const [people, setPeople] = useState(Data)

  return (
    <div className='main'>
        <div className='tabela'>
          <h3 className='heading'>{people.length} Birthdays today</h3>
          <List people={people}/>
          {/* we have an array, this is out default value, and you pass it in */}
          <button onClick={() => setPeople([])} className='dugme'>Clear ALL</button>
        </div>
    </div>
  )
}

export default Reminder