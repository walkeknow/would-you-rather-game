import React from 'react'
import { connect } from 'react-redux'
import { handleSubmitAnswer } from '../actions/questions'

const handleSubmit = (e, dispatch, authedUser, qid) => {
  e.preventDefault()
  const selectedOption = document.querySelector('input[name="answer"]:checked')
    .value
  const answerObj = {
    authedUser,
    qid,
    answer: selectedOption,
  }
  dispatch(handleSubmitAnswer(answerObj))
}

function SubmitAnswer({ question, dispatch, authedUser }) {
  if (question) {
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    return (
      <form
        className='a-container'
        onSubmit={(e) => handleSubmit(e, dispatch, authedUser, question.id)}
      >
        <span className='a-header'>Would You Rather?</span>
        <div className='radio-options'>
          <div>
            <input
              type='radio'
              id='option-one'
              name='answer'
              value='optionOne'
              defaultChecked
            />
            <label htmlFor='option-one'>{optionOne}</label>
          </div>
          <div>
            <input
              type='radio'
              id='option-two'
              name='answer'
              value='optionTwo'
            />
            <label htmlFor='option-one'>{optionTwo}</label>
          </div>
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
    )
  }
  return null
}

export default connect(({ authedUser }) => ({
  authedUser,
}))(SubmitAnswer)
