import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material'

import theme from './utils/theme'
import App from './App';
import { ClientMaintenance, ClientQuery, Error, Home, Login, Register } from './pages'
import { StateContext } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/client-maintenance" element={<ClientMaintenance />} />
              <Route path="/client-query" element={<ClientQuery />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </StateContext>
    </ThemeProvider>
  </React.StrictMode>
);
