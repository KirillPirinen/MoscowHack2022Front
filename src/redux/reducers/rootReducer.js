import { combineReducers } from "redux";
import loaderReducer from "./loaderReducer";
import messagesReducer from "./messageReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";
import widgetReducer from "./widgetReducer";
import calendarWidgetReducer from './calendarWidgetReducer'
import taskReducer from "./tasksReducer";
import categoryReducer from "./categoryReducer";
import taskDetailReducer from "./taskDetailReducer";

export default combineReducers({
  isLoading: loaderReducer,
  messages: messagesReducer,
  modal: modalReducer,
  widget: widgetReducer,
  user: userReducer,
  calendar: calendarWidgetReducer,
  tasks: taskReducer,
  category: categoryReducer,
  taskDetail: taskDetailReducer
})
