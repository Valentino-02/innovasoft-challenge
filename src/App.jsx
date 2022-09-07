import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

import { NavBar } from './components'
import { useStateContext } from './context'

function App() {
  const { auth } = useStateContext()

  if (!auth) {
    return <Navigate replace to="/login" />
  } else {
    return (
      <div>
        <NavBar>
          <Outlet />  
        </NavBar>
      </div>
    );
  }

}

export default App;
