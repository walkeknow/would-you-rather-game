import React, { Component } from 'react'
import QuestionList from './QuestionList'

export class Polls extends Component {
  state = {
    listType: 'unanswered',
  }
  componentDidMount() {
    document.getElementById('unanswered').setAttribute('class', 'btn-q-active')
  }
  handleClick = (listType) => {
    if (listType === 'unanswered') {
      document.getElementById(listType).setAttribute('class', 'btn-q-active')
      document
        .getElementById('answered')
        .removeAttribute('class', 'btn-q-active')
      document.getElementById('answered').setAttribute('class', 'btn-q')
    } else {
      document.getElementById(listType).setAttribute('class', 'btn-q-active')
      document
        .getElementById('unanswered')
        .removeAttribute('class', 'btn-q-active')
      document.getElementById('unanswered').setAttribute('class', 'btn-q')
    }
    this.setState(() => ({
      listType,
    }))
  }
  render() {
    return (
      <div className='polls-container'>
        <div className='question-category'>
          <div
            onClick={(e) => this.handleClick('unanswered')}
            id='unanswered'
            className='btn-q'
          >
            Unanswered
          </div>
          <div
            onClick={(e) => this.handleClick('answered')}
            id='answered'
            className='btn-q'
            value='answered'
          >
            Answered
          </div>
        </div>
        <QuestionList listType={this.state.listType} />
      </div>
    )
  }
}

export default Polls
