import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Question extends Component {
  render() {
    if (this.props.user) {
      const { name, avatarURL } = this.props.user
      const { question } = this.props
      console.log(question)
      return (
        <div className='question'>
          <img className='avatar' src={avatarURL} alt='avatar'></img>
          <div className='poll-text'>
            <div className='poll-q-header'>
              <span className='u-name'>{`${name} asks: `}</span>
              Would you rather
            </div>
            <span className='poll-q-body'>{question.optionOne.text}...?</span>
          </div>
          <div className='btn-container'>
            <button className='poll-btn'>View</button>
          </div>
        </div>
      )
    }
    return null
  }
}

export default connect(({ users }, { question }) => ({
  user: Object.values(users).filter((user) => question.author === user.id)[0],
}))(Question)
