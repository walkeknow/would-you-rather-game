import { getQuestions } from './questions'
import { getUsers } from './users'
import { getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'dan_abramov' //todo remove

export const handleInitialData = () => (dispatch) => {
  return getInitialData().then(({ users, questions }) => {
    dispatch(setAuthedUser(AUTHED_ID)) //todo remove
    dispatch(getQuestions(questions))
    dispatch(getUsers(users))
  })
}
