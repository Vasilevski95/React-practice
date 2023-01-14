import React from 'react'
import './List.css'

const List = ({people}) => {
  return (
    <div className='ceo-div'>
      {people.map (person => {
        return (
          <div className='manji-div' key={person.id}>
            <img className='slike' src={person.image} alt={person.name}/>
            <div className='lista-i-paragraf'>
              <b className='lista' >{person.name}</b>
              <i>{person.age} years</i>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List