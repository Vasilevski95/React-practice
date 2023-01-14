import React from 'react'
import './List.css'

const List = ({people}) => {
  return(
    <div className='lista'>
      {people.map(person => {
        return (
          <div className='redjanje'
          key={person.id}
          >
              <img className='images' src={person.image} alt={person.name}/>
              <p className='lista-lista'>{person.name}</p>
              <p>{person.age} years</p>
          </div>
        )
      })}
    </div>
  )
}

export default List