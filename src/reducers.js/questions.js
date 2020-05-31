import { GET_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

export const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions
    case SAVE_QUESTION_ANSWER:
      return action.info.questions
    default:
      return state
  }
}
