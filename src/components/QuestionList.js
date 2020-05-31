import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
  render() {
    return (
      <div className='questions-container'>
        <ul>
          {this.props.newQuestions &&
            this.props.newQuestions.map((question) => (
              <li key={question.id}>
                <Question question={question} />
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, authedUser }, { listType }) => {
  if (listType === 'answered') {
    return {
      newQuestions: Object.values(questions)
        .filter(
          (question) =>
            question.optionOne.votes.includes(authedUser) ||
            question.optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => b.timestamp - a.timestamp),
    }
  } else if (listType === 'unanswered') {
    return {
      newQuestions: Object.values(questions)
        .filter(
          (question) =>
            !(
              question.optionOne.votes.includes(authedUser) ||
              question.optionTwo.votes.includes(authedUser)
            )
        )
        .sort((a, b) => b.timestamp - a.timestamp),
    }
  }
}

export default connect(mapStateToProps)(QuestionList)
