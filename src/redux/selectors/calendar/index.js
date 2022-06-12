import { createSelector } from "reselect"

export const hasCalendarError = state => state.calendar.error
export const isCalendarLoading = state => state.calendar.loading

export const getParsedCalendarEvents = createSelector(
  state => state.calendar.events,
  (rawEvents) => {
    
    let result = []

    if(rawEvents?.length) {

      let currentElement = [rawEvents[0]]

      for(let i = 1; i < rawEvents.length; i++) {
        if(rawEvents[i].date === currentElement[0].date) {
          currentElement.push(rawEvents[i])
        } else {
          result.push(currentElement)
          currentElement = [rawEvents[i]]
        }
      }

      result.push(currentElement)
    }

    return result
  }
)
