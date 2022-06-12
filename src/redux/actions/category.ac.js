import { GET_CATEGORY_INFO } from "../types";
import network from '../../network/network'
import endPoints from "../../network/endPoints";

export const getCategoryInfo = (category_id) => async dispatch => {
  const { data } = await network.get(endPoints.getCategoryInfo(category_id))
  dispatch({ type: GET_CATEGORY_INFO, payload: data })
}

