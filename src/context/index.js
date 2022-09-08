import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [ userInfo, setUserInfo ] = useState({
    "username": '',
    "id": '',
  })
  const [ interests, setInterests ] = useState([])
  const [ clients, setClients ] = useState([])
  const [ clientData, setClientData ] = useState({})

  return (
    <Context.Provider
      value={{
        userInfo,
        setUserInfo,
        interests,
        setInterests,
        clients,
        setClients,
        clientData,
        setClientData
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)