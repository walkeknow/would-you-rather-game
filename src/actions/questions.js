import { saveQuestionAnswer } from "../utils/api";
export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export const getQuestions = (questions) => ({
  type: GET_QUESTIONS,
  questions,
})

export const answerQuestion = (info) => ({
  type: SAVE_QUESTION_ANSWER,
  info,
})

export const handleSubmitAnswer = (info) => (dispatch) => {
  return saveQuestionAnswer(info)
  .then((returnedInfo) => {
    console.log(returnedInfo)
    dispatch(answerQuestion(returnedInfo))
  })
}