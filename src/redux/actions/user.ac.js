import { DELETE_USER, EDIT_USER, SET_USER } from "../types"
import endPoints from '../../network/endPoints'
import network from '../../network/network'
import { clearModal, setModal } from "./modal.ac"
import store from "../store"
import deleteEmptyProp from "../../utils/deleteEmptyProp"
import { setMessages } from "./messages.ac"

const dispatch = store.dispatch

export const setUser = (user) => dispatch({ type: SET_USER, payload: user })

export const getFullInfo = () => async dispatch => {
  const { data } = await network.get(endPoints.getFullUserInfo)
  data.isDetailedInfo = true
  setUser(data)
}

export const deleteUser = () => {
  localStorage.removeItem('accessToken')
  dispatch({ type: DELETE_USER })
}

export const editUserAvatar = payload => async dispatch => {
  const {status, data} = await network.patch(endPoints.manipulateUser, payload)
  if(status === 200) {
    dispatch({ type:EDIT_USER, payload:data })
  }
}

export const signUp = (payload, navigate) => async (dispatch) => {
  try {
    const {status, data} = await network.post(endPoints.signUp, deleteEmptyProp(payload), { withCredentials: true })
    if(status === 200) {
      dispatch(setUser(data))
      clearModal()
      setMessages({ 
        status: true, 
        message: 'Успешная регистрация', 
        level: 'success',
      })
    }
  } catch (err) {
    if(err.response.status === 403) {
      setModal('LOGIN')
    }
  }
  
};

export const signIn = (payload) => async (dispatch) => {
  const { status, data } = await network.post(endPoints.signIn, payload, { withCredentials: true })
  if(status === 200) {
    setUser(data)
    clearModal()
    setMessages({ 
      status: true, 
      message: 'Успешная регистрация', 
      level: 'success',
    })
  }
}

export const signOut = () => async (dispatch) => {
  const {status} = await network.get(endPoints.signOut, { withCredentials: true });
  if (status === 200) dispatch(deleteUser());
};

export const checkAuth = () => async (dispatch) => {
  const {data, status} = await customAxios.get(initPoints.checkAuth);
  if(status === 200) dispatch(setUser(data));
};

export const checkEmail = payload => async (dispatch) => {
  try{
    await customAxios.post(initPoints.checkEmail, payload);
    dispatch(clearModal())
  } catch {
    dispatch(clearModal())
  }
};
  