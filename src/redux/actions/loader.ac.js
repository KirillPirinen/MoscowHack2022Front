import { DISABLE_LOADER, ENABLE_LOADER } from "../types";
import store from "../store"

const dispatch = store.dispatch

export const enableLoader = () => dispatch({ type: ENABLE_LOADER })

export const disableLoader = () => dispatch({ type: DISABLE_LOADER })

