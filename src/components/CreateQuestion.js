import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSubmitQuestion } from '../actions/questions'

class CreateQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }
  handleOptionOne = (text) => {
    this.setState(() => ({
      optionOne: text,
    }))
  }
  handleOptionTwo = (text) => {
    this.setState(() => ({
      optionTwo: text,
    }))
  }
  handleSubmit = (e, dispatch, authedUser) => {
    e.preventDefault()
    if (this.state.optionOne === '' || this.state.optionTwo === '') {
      alert('Please fill both fields!')
    } else {
      const questionObj = {
        optionOneText: this.state.optionOne,
        optionTwoText: this.state.optionTwo,
        author: authedUser,
      }
      dispatch(handleSubmitQuestion(questionObj))
      this.props.history.push('/')
      this.setState(() => {
        return {
          optionOne: '',
          optionTwo: '',
        }
      })
    }
  }
  render() {
    const { dispatch, authedUser } = this.props
    return (
      <form
        className='a-container'
        onSubmit={(e) => this.handleSubmit(e, dispatch, authedUser)}
      >
        <span className='a-header'>Would You Rather?</span>
        <div>
          <label className='label' htmlFor='option-one'>
            Option One
          </label>
          <br />
          <input
            className='enter-option'
            type='text'
            id='option-one'
            name='answer'
            placeholder='Enter text'
            value={this.state.optionOne}
            onChange={(e) => this.handleOptionOne(e.target.value)}
          />
        </div>
        <div>
          <label className='label' htmlFor='option-one'>
            Option Two
          </label>
          <br />
          <input
            className='enter-option'
            type='text'
            id='option-two'
            name='answer'
            placeholder='Enter text'
            value={this.state.optionTwo}
            onChange={(e) => this.handleOptionTwo(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-create'>
          Submit
        </button>
      </form>
    )
  }
}

export default connect(({ authedUser }) => ({
  authedUser,
}))(CreateQuestion)
