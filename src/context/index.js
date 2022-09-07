import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const  [userInfo, setUserInfo ] = useState({
    "username": 'template username',
    "userid": '',
    "token": ''
  })
  const [auth, setAuth ] = useState(false)

  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo,
        auth,
        setAuth,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)