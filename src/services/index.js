import axios from "axios";

const API_URL = 'http://209.105.239.29/PruebaReactJs/Api'

export const authAxios = axios.create({
  baseURL: `${API_URL}/api/Authenticate`,
});

export const clientsAxios = axios.create({
  baseURL: `${API_URL}/api/Cliente`,
})

export const interestsAxios = axios.create({
  baseURL: `${API_URL}/api/Intereses`,
})

clientsAxios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('loginToken')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  }
)

interestsAxios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('loginToken')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  }
)

