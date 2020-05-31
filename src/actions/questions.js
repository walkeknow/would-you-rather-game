import { saveQuestionAnswer, saveQuestion } from '../utils/api'
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const CREATE_QUESTION = 'CREATE_QUESTION'

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  questions,
})

export const saveAnswer = (info) => ({
  type: SAVE_QUESTION_ANSWER,
  info,
})

export const createQuestion = (info) => ({
  type: CREATE_QUESTION,
  info,
})

export const handleSubmitAnswer = (info) => (dispatch) => {
  return saveQuestionAnswer(info).then((returnedInfo) => {
    dispatch(saveAnswer(returnedInfo))
  })
}

export const handleSubmitQuestion = (info) => (dispatch) => {
  return saveQuestion(info).then((returnedInfo) => {
    dispatch(createQuestion(returnedInfo))
  })
}
