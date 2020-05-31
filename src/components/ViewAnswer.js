import React from 'react'
import { connect } from 'react-redux'

const percentage = (number, total) => ((number / total) * 100).toFixed(2)

const displayAuthedUserVote = (option, question, authedUser) => {
  const optionOneVotes = question.optionOne.votes
  const optionTwoVotes = question.optionTwo.votes
  if (option === 'optionOne' && optionOneVotes.includes(authedUser)) {
    return (
        <span className='your-vote'>Your Vote</span>
    )
  } else if (option === 'optionTwo' && optionTwoVotes.includes(authedUser)) {
    return (
        <span className='your-vote'>Your Vote</span>
    )
  }
  return null
}

const displayVotes = (option, question, numberOfUsers) => {
  const optionOneVotes = question.optionOne.votes
  const optionTwoVotes = question.optionTwo.votes
  if (option === 'optionOne') {
    return (
        <div className='option-votes'>
          {optionOneVotes.length} / {numberOfUsers} users chose this (
          {percentage(optionOneVotes.length, numberOfUsers)}%)
        </div>
    )
  } else {
    return (
        <div className='option-votes'>
          {optionTwoVotes.length} / {numberOfUsers} users chose this (
          {percentage(optionTwoVotes.length, numberOfUsers)}%)
        </div>
    )
  }
}

function ViewAnswer({ question, authedUser, numberOfUsers }) {
  if (question) {
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    return (
      <div className='a-container'>
        <span className='a-header'>Would You Rather?</span>
        <ul className='a-list'>
          <li>
            {optionOne}
            {displayAuthedUserVote(
              'optionOne',
              question,
              authedUser,
            )}
            {displayVotes('optionOne', question, numberOfUsers)}
          </li>
          <li>
            {optionTwo}
            {displayAuthedUserVote(
              'optionTwo',
              question,
              authedUser,
            )}
            {displayVotes('optionTwo', question, numberOfUsers)}
          </li>
        </ul>
      </div>
    )
  }
  return null
}

export default connect(({ authedUser, users }) => ({
  numberOfUsers: Object.keys(users).length,
  authedUser,
}))(ViewAnswer)
