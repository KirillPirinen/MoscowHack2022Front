import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import initState from "./initState";
import rootReducer from "./reducers/rootReducer";
import { userSubscriber } from "./subscribers/userSubscriber";

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(userSubscriber)

export default store
