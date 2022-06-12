import initState from "../initState";
import { CLEAR_WIDGET, SET_WIDGET } from "../types";

const widgetReducer = (state = initState.widget, action) => {
  switch (action.type) {

    case SET_WIDGET: return {
        widgetType: action.payload.widgetType, 
        widgetProps: typeof action.payload.widgetProps === "object" ? action.payload.widgetProps : initState.widget.widgetProps
      }

    case CLEAR_WIDGET: return { widgetType: null, widgetProps: {} }

    default: return state
  }
}

export default widgetReducer;
