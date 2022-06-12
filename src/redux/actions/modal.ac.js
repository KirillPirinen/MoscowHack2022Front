import { CLEAR_MODAL, SET_MODAL } from "../types"
import store from "../store"

const dispatch = store.dispatch

export const setModal = (modalType, modalProps) => 
  dispatch({ type:SET_MODAL, payload: { modalType, modalProps } })

export const clearModal = () => dispatch({ type:CLEAR_MODAL })
