import React, {useEffect, useState} from 'react';
import { Outlet, useNavigate } from "react-router-dom";

import { NavBar } from './components'
import { useStateContext } from './context'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    let isAuth = localStorage.getItem('auth')

    if (isAuth !== 'true') {
      navigate('/login')
    } 
  }, [])

    return (
      <div>
        <NavBar>
          <Outlet />  
        </NavBar>
      </div>
    );
}

export default App;
