import produce from "immer";
import initState from "../initState";
import { ERROR_CALENDAR, LOADING_CALENDAR, SET_CALENDAR, UPDATE_CALENDAR_EVENT } from "../types";

const calendarWidgetReducer = (state = initState.calendar, action) => {
  switch (action.type) {

    case LOADING_CALENDAR:
      return { loading: true }

    case SET_CALENDAR:
      return { loading: false, events: action.payload }

    case UPDATE_CALENDAR_EVENT: 
      return produce(state, draft => {
        const index = draft.events.findIndex(el => {
          return el.id === action.payload.id
        })
        draft.events[index] = { ...draft.events[index], ...action.payload.propsToChange }
      })

    case ERROR_CALENDAR:
      return { loading: false, error: true }

    default:
      return state
  }
}

export default calendarWidgetReducer
