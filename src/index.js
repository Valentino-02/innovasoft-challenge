import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material'

import theme from './utils/theme'
import App from './App';
import { ClientMaintenance, ClientQuery, Error, Home, Login, Register } from './pages'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  </React.StrictMode>
);
