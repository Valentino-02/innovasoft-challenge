import axios from "axios";

import { API_URL } from ".";

export const registerUser = async (userData) => {
  try {
    const res = await axios({
      url: `${API_URL}/api/Authenticate/register`,
      method: 'POST',
      data: userData,
    })
    return res
  } catch(err) {
    console.log(err)
  }
}

export const loginUser = async (userData) => {
  try {
    const res = await axios({
      url: `${API_URL}/api/Authenticate/login`,
      method: 'POST',
      data: userData,
    })
    return res
  } catch(err) {
    console.log(err)
  }
}