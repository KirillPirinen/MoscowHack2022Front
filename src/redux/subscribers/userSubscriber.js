import initState from '../initState'
import { getUserState } from '../selectors'
import store from '../store'

let currentValue = initState.user

export const userSubscriber = () => {
  let previousValue = currentValue

  currentValue = getUserState(store.getState())

  if (previousValue !== currentValue) {
     localStorage.setItem('user', JSON.stringify(currentValue))
  }
  
}
