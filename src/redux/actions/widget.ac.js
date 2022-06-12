import { CLEAR_WIDGET, SET_WIDGET } from "../types"
import store from "../store"

const dispatch = store.dispatch

export const setWidget = (widgetType, widgetProps) => 
  dispatch({ type:SET_WIDGET, payload: { widgetType, widgetProps } })

export const clearWidget = () => dispatch({ type:CLEAR_WIDGET })
