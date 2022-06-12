import endPoints from '../../network/endPoints'
import network from '../../network/network'
import { getCalendarEvents } from './calendar.ac'
import { clearModal } from './modal.ac'
import { getFullInfo } from './user.ac'

export const unsubscribeHandler = (event_id) => async dispatch => {
  dispatch(clearModal())
  const { status } = await network.delete(endPoints.subscribeEvent(event_id))
  if(status === 200) {
    dispatch(getFullInfo())
    dispatch(getCalendarEvents())
  }
} 
