import { ERROR_CALENDAR, LOADING_CALENDAR, SET_CALENDAR, UPDATE_CALENDAR_EVENT } from "../types";
import network from '../../network/network'
import endPoints from "../../network/endPoints";

export const getCalendarEvents = () => async dispatch => {
  dispatch({ type: LOADING_CALENDAR })
  try {
    const { data } = await network.get(endPoints.getCalendarEvents)
    dispatch({ type: SET_CALENDAR, payload: data })
  } catch (err) {
    dispatch({ type: ERROR_CALENDAR })
  }
}

export const updateCalendarEvent = (id, propsToChange) => ({ type: UPDATE_CALENDAR_EVENT, payload: { id, propsToChange } })

