import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import Login from './Login'
import { setAuthedUser } from '../actions/authedUser'
import Polls from './Polls'
import ViewQuestionPage from './ViewQuestionPage'
import CreateQuestion from './CreateQuestion'
import Leaderboard from './Leaderboard'

const unasweredQuestion = {
  id: 'am8ehyc8byjqgar0jgpub9',
  author: 'sarahedo',
  timestamp: 1488579767190,
  optionOne: {
    votes: [],
    text: 'be telekinetic',
  },
  optionTwo: {
    votes: ['sarahedo'],
    text: 'be telepathic'
  }
}

const answeredQuestion = {
  id: 'xj352vofupe1dqz9emx13r'
}

console.log(unasweredQuestion)

export class App extends Component {
  state = {
    authedUser: null,
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  handleSelect = (uid) => {
    this.setState(() => ({
      authedUser: uid,
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState((currState) => {
      // if form is submitted without selecting dropdown
      if (currState.authedUser === null) {
        this.props.dispatch(setAuthedUser('sarahedo'))
      } else this.props.dispatch(setAuthedUser(currState.authedUser))
      return {
        authedUser: null,
      }
    })
  }
  render() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
          {this.props.autheticated === false ? (
            <Login
              handleSelect={this.handleSelect}
              handleSubmit={this.handleSubmit}
            />
          ) : (
            // <Polls/>
            // <ViewQuestionPage match={{params: {id: "8xf0y6ziyjabvozdd253nd"}}}/>
            // <CreateQuestion/>
            <Leaderboard/>
          )}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  autheticated: authedUser !== null,
})

export default connect(mapStateToProps)(App)
