import React from 'react';
import { Outlet } from "react-router-dom";

import { NavBar } from './components'

function App() {
  return (
    <div>
      <NavBar>
        <Outlet />  
      </NavBar>
    </div>
  );
}

export default App;
