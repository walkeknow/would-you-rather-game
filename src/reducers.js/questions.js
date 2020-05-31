import { GET_QUESTIONS, SAVE_QUESTION_ANSWER, CREATE_QUESTION } from '../actions/questions'

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions
    case SAVE_QUESTION_ANSWER:
      return action.info.questions
    case CREATE_QUESTION:
      return action.info.questions
    default:
      return state
  }
}
