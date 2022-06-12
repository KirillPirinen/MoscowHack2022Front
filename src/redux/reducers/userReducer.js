import initState from "../initState";
import { DELETE_USER, SET_USER, EDIT_USER } from "../types";

const userReducer = (state = initState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload

    case EDIT_USER:
      return {...state, ...action.payload}

    case DELETE_USER: return {}

    default:
      return state
  }
}

export default userReducer
