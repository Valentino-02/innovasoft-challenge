import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

import DrawerMenu from './DrawerMenu';

const drawerWidth = 240;

const NavBar = () => {
  const [drawerOpen, setDrawerOpen ] = useState(false)

  const handleLogOut = () => {
    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          User-Name
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

    </Box>
  )
}

export default NavBar