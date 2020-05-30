import { SET_AUTHED } from '../actions/authedUser'

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED:
      return action.id
    default:
      return state
  }
}
