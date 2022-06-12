import initState from "../initState";
import { CLEAR_MODAL, SET_MODAL } from "../types";

const modalReducer = (state = initState.modal, action) => {
  switch (action.type) {

    case SET_MODAL: return {
        modalType: action.payload.modalType, 
        modalProps: typeof action.payload.modalProps === "object" ? action.payload.modalProps : initState.modal.modalProps
      }

    case CLEAR_MODAL: return initState.modal

    default: return state
  }
}

export default modalReducer;
