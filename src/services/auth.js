import { authAxios } from '.'

export const registerUser = async (userData) => {
  return await authAxios.post('/register', userData)
}

export const loginUser = async (userData) => {
  return await authAxios.post('/login', userData)
}


