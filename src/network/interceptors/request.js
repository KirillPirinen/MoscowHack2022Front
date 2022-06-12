import { enableLoader } from "../../redux/actions/loader.ac"

const _getToken = () => window.localStorage.getItem('accessToken') || null

export const autoSetAuthorization = (config) => {
  enableLoader()
  const token = _getToken()
  if (typeof token === 'string') {
    config.headers.Authorization = 'Bearer ' + token
  }
  return config
}


