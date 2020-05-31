import React from 'react'
import { connect } from 'react-redux'
import SubmitAnswer from './SubmitAnswer'
import ViewAnswer from './ViewAnswer'

function ViewQuestionPage({ user, question, authedUser }) {
  if (user) {
    const { avatarURL, name } = user
    const answered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    return (
      <div className='view-q-container'>
        <div className='view-q-header'>
          <div>
            <span className='u-name'>
              {answered === false ? `${name} Asks: ` : `${name} Asked: `}
            </span>
          </div>
          <img className='avatar-big' src={avatarURL} alt='avatar'></img>
        </div>
        {answered === false ? (
          <SubmitAnswer question={question} />
        ) : (
          <ViewAnswer question={question} />
        )}
      </div>
    )
  }
  return null
}

const mapStateToProps = ({ users, questions, authedUser }, { match }) => {
  const id = match.params.id
  const question = Object.values(questions).filter(
    (question) => id === question.id
  )[0]
  return {
    authedUser,
    question,
    user: Object.values(users).filter((user) => question.author === user.id)[0],
  }
}

export default connect(mapStateToProps)(ViewQuestionPage)
