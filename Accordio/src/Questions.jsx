import React from 'react'
import questions from './data'
import './Questions.css'
import Question from './Question'



const Questions = () => {

  return (
    <div className='questions'>
      {questions.map ((question) => {
        return (
          <Question key={question.id} {...question}/>
        )
      })}
    </div>
  )
}




export default Questions