import network from '../../network/network'
import endPoints from '../../network/endPoints';
import {ADD_NEW_TASK, GET_CATEGORIES, GET_TASKS_BY_CATEGORY, GET_TASK_DETAIL_INFO, SEARCH_TASKS_BY_STRING} from '../types';

export const getTaskDetail = (category_id, options) => async dispath => {
  const { data } = await network.get(endPoints.getTasks(category_id, options))
  dispath({ type: GET_TASK_DETAIL_INFO, payload: data })
}

export const searchTaskByText = text => async dispatch => {
  const { data } = await network.get(endPoints.getTasksByTextQuery(text))
  dispatch({ type: SEARCH_TASKS_BY_STRING, payload: { lastSearch: text, tasks: data } })
}

export const addNewTask = data => async dispatch => {
  const response = await network.post(endPoints.addNewTask, data)
  console.log(response.data);
  dispatch({ type: ADD_NEW_TASK, payload: response.data})
}

export const getCategories = () => async dispatch => {
  const response = await network.get(endPoints.getCategories)
  dispatch({ type: GET_CATEGORIES, payload: response.data})
}

export const getTasksByCategory = (category_id, options) => async dispatch => {
  const { data } = await network.get(endPoints.getTasksByCategory(category_id, options))
  dispatch({ type: GET_TASKS_BY_CATEGORY, payload: { lastSearch: category_id, tasks: data } })
}
