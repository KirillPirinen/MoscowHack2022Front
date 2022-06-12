import initState from "../initState";
import { GET_TASK_DETAIL_INFO } from "../types";

const taskDetailReducer = (state = initState.taskDetail, action) => {
  switch (action.type) {

    case GET_TASK_DETAIL_INFO:
      return action.payload

    default:
      return state
  }
}

export default taskDetailReducer
