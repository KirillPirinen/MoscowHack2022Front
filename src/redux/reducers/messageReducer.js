import { CLEAR_MESSAGES, SET_MESSAGES} from "../types";
import initState from "../initState";

const messagesReducer = (state = initState.messages, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return { status:true, ...action.payload };

    case CLEAR_MESSAGES:
      return initState.messages

    default:
      return state;
  }
};

export default messagesReducer;
