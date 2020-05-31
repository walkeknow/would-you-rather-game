import React, { Component} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import Login from './Login'
import { setAuthedUser } from '../actions/authedUser'
import Polls from './Polls'

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
            <Polls/>
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
