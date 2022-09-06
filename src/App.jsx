import React from 'react';
import { Link, Outlet } from "react-router-dom";


import { NavBar }from './components'

function App() {
  return (
    <div>
      <NavBar />
      My App
      <Link to='/home'>Home</Link>
      <Link to='/error'>Error</Link>
      <Link to='/login'>Login</Link>
      <Outlet />
    </div>
  );
}

export default App;
