import { questions } from './questions'
import { users } from './users'
import { authedUser } from './authedUser'
import { combineReducers } from 'redux'

export default combineReducers({
  authedUser,
  questions,
  users,
})
