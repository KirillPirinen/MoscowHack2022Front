import initState from "../initState";
import { GET_CATEGORY_INFO } from "../types";

const categoryReducer = (state = initState.category, action) => {
  switch (action.type) {
    case GET_CATEGORY_INFO:
      return action.payload

    default:
      return state
  }
}

export default categoryReducer
