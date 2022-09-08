import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import DrawerMenu from './DrawerMenu';
import { useStateContext } from '../context';

const drawerWidth = 240;

const NavBar = ({ children, mainPage }) => {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen ] = useState(false)

  const { userInfo } = useStateContext() 

  const handleLogOut = () => {
    localStorage.removeItem('loginToken')
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    localStorage.removeItem('auth')
    navigate('/login')
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar 
        color="primary" 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            client-data-manager
          </Typography>
          <Typography 
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {userInfo.username}
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleLogOut}
            size='large'
            sx={{ ml: 'auto' }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <DrawerMenu open={drawerOpen} drawerWidth={drawerWidth} parentSetter={setDrawerOpen}/>
      </Box>

      <Box sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>  
        <Toolbar />
        {children}
      </Box>

    </Box>
  )
}

export default NavBar