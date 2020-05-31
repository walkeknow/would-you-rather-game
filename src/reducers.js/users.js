import { GET_USERS } from '../actions/users'
import { SAVE_QUESTION_ANSWER, CREATE_QUESTION } from '../actions/questions'

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    case SAVE_QUESTION_ANSWER:
      return action.info.users
    case CREATE_QUESTION:
      return action.info.users
    default:
      return state
  }
}
