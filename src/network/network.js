import { host } from "./endPoints"
import axios from 'axios'
import { autoRefreshAccessToken, autoSaveAccessToken } from "./interceptors/response";
import { autoSetAuthorization } from '../network/interceptors/request'

const customAxios = axios.create({
  baseURL: host
});

customAxios.interceptors.request.use(autoSetAuthorization)
customAxios.interceptors.response.use(autoSaveAccessToken, autoRefreshAccessToken)

export default customAxios;
