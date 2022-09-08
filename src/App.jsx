import React, {useEffect } from 'react';
import { Outlet, useNavigate } from "react-router-dom";

import { NavBar } from './components'
import { useStateContext } from './context'


function App() {
  const navigate = useNavigate()
  const { userInfo, setUserInfo } = useStateContext()

  useEffect(() => {
    let isAuth = localStorage.getItem('auth')
    if (isAuth !== 'true') {
      navigate('/login')
    }

    if (userInfo.id === '') {
      let newUserInfo = {
        "username": localStorage.getItem('username'),
        "id": localStorage.getItem('userid'),
      }
      setUserInfo({
        ...userInfo,
        ...newUserInfo
      })
    }
  }, [navigate, setUserInfo, userInfo])

  return (
    <div>
      <NavBar>
        <Outlet />  
      </NavBar>
    </div>
  ); 
}

export default App;
