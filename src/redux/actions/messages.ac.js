import { CLEAR_MESSAGES, SET_MESSAGES } from "../types";
import store from "../store";

const dispatch = store.dispatch

export const setMessages = (value) => dispatch({
  type: SET_MESSAGES,
  payload: value,
});

export const clearMessages = () => dispatch({
  type: CLEAR_MESSAGES
});

