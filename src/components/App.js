import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import { setAuthedUser } from '../actions/authedUser'

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
      this.props.dispatch(setAuthedUser(currState.authedUser))
      return {
        authedUser: null
      }
    })
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Navbar />
          <Login
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </Router>
    )
  }
}

export default connect()(App)
