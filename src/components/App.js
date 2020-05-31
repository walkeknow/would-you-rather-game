import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Navbar from '../components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './Login'
import { setAuthedUser } from '../actions/authedUser'
import Polls from './Polls'
import ViewQuestionPage from './ViewQuestionPage'
import CreateQuestion from './CreateQuestion'
import Leaderboard from './Leaderboard'

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
      } else {
        this.props.dispatch(setAuthedUser(currState.authedUser))
      }
      return {
        authedUser: null,
      }
    })
  }
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null))
  }
  render() {
    return (
      <Router>
        <div className='container'>
          {this.props.autheticated === false ? (
            <Redirect to='/login' />
          ) : (
            <Fragment>
              <Navbar handleLogout={this.handleLogout} />
              <Redirect to='/' />
            </Fragment>
          )}
          <Switch>
            <Route exact path='/' component={Polls}></Route>
            <Route path='/question/:id' component={ViewQuestionPage}></Route>
            <Route path='/add' component={CreateQuestion}></Route>
            <Route path='/leaderboard' component={Leaderboard}></Route>
            <Route
              path='/login'
              render={() => {
                return (
                  <Login
                    handleSelect={this.handleSelect}
                    handleSubmit={this.handleSubmit}
                  />
                )
              }}
            ></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  autheticated: authedUser !== null,
})

export default connect(mapStateToProps)(App)
