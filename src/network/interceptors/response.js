import network from '../network'
import { deleteUser } from '../../redux/actions/user.ac'
import endPoints, { host } from '../endPoints'
import { disableLoader } from "../../redux/actions/loader.ac"
import { setMessages } from '../../redux/actions/messages.ac'
import defaultAxios from 'axios'

const _saveToken = (data = {}) => {
    if (typeof data.accessToken === 'string') {
        window.localStorage.setItem('accessToken', data.accessToken)
        return true
    }
}

export const autoSaveAccessToken = (config) => {
    disableLoader()

    if(config.data?.hasOwnProperty("info")) {
        setMessages({ 
            status: true, 
            message: config.data.info.message, 
            level: config.data.info.level || 'success',
        })
    }

    return _saveToken(config.data), config
}

export const autoRefreshAccessToken = async (error) => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        try {
            const { data } = await defaultAxios.get(host + endPoints.refresh, { withCredentials: true })
            
            if(_saveToken(data)) {
                return network(originalRequest)
            }

        } catch(err) {
            if(err.response.status === 401) deleteUser() 
        }

    }

    if(error.response.data?.hasOwnProperty("message")) {
        setMessages({ 
            status: true, 
            message: error.response.data.message, 
            level: 'warning',
            errors: error.response.data.errors
        })
    }

    disableLoader()
    return error
}
