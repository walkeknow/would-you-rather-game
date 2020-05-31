import { getQuestions } from './questions'
import { getUsers } from './users'
import { getInitialData } from '../utils/api'

export const handleInitialData = () => (dispatch) => {
  return getInitialData().then(({ users, questions }) => {
    dispatch(getQuestions(questions))
    dispatch(getUsers(users))
  })
}
