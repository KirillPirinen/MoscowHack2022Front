import initState from "../initState";
import { ADD_NEW_TASK, GET_CATEGORIES, GET_TASKS_BY_CATEGORY, SEARCH_TASKS_BY_STRING } from "../types";

const taskReducer = (state = initState.tasks, action) => {
  switch (action.type) {
    case SEARCH_TASKS_BY_STRING:
      return action.payload

    case ADD_NEW_TASK:
      console.log(action.payload);
      return {...state, tasks: [...state.tasks, action.payload]}

    case GET_CATEGORIES: 
      return {...state, categories: action.payload}

    case GET_TASKS_BY_CATEGORY: 
      return {...initState.tasks, lastSearch:action.payload.lastSearch, tasks: action.payload.tasks}

    default:
      return state
  }
}

export default taskReducer
