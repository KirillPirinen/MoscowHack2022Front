import { createSelector } from 'reselect'

export const getModalState = state => state.modal
export const getWidgetState = state => state.widget
export const getUserState = state => state.user
export const getLoadingState = state => state.isLoading
export const getMessagesSelector = state => state.messages
export const getLastSearch = state => state.tasks.lastSearch
export const getTasks = state => state.tasks.tasks
export const getUserAcceptedTasks = state => state.user.acceptedTasks
export const getUserCreatedTasks = state => state.user.createdTasks
export const getUserRecievedReviews = state => state.user.recieved_reviews
export const getUserEvents = state => state.user.events
export const getCategory = state => state.category
export const getTaskDetailSelector = state => state.taskDetail

export const getParsedTasks = createSelector(getTasks, rawTasks => {

  let prevComplete = 0

  const res = rawTasks?.map((task, i, arr) => {

    const isLast = arr.length - 1 === i

    if((i % 3 || isLast) && task.image && prevComplete === 2) {
      prevComplete = 0
      return {...task, md:12, textLimit:300, textCut:true, orientation: 'horizontal'}
    }

    prevComplete = prevComplete === 2 ? 1 : prevComplete + 1
    const neighbour = prevComplete === 1 ? arr[i + 1] : arr[i - 1]
    const textLimit = task?.image || (!neighbour || !neighbour.image) ? 220 : 710

    return {...task, md:6, textLimit, textCut:textLimit === 220}
  })

  return res
})
