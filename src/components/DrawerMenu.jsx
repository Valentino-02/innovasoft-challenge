import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Drawer, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Stack } from '@mui/system';

import { useStateContext } from '../context';

const DrawerColumn = () => {  
  const navigate = useNavigate()

  const { userInfo } = useStateContext()

  return (
  <>
    <Stack alignItems='center' justifyContent='center' sx={{ mt:2, mb: 2 }}>
    <AccountCircleIcon sx={{ fontSize: 150 }} />
    <Typography variant='h4'>{userInfo.username}</Typography>
    </Stack>
    <Divider />

    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={() => navigate("/client-query")}>
          <ListItemIcon>
            <PersonSearchIcon />
          </ListItemIcon>
          <ListItemText primary='Clients Query' />
        </ListItemButton>
      </ListItem>
    </List>
  </> 
  )
}

const DrawerMenu = ({ open, drawerWidth, parentSetter }) => {
  return (
    <>
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => parentSetter(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerColumn />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <DrawerColumn />
      </Drawer>
    </>
  )
}

export default DrawerMenu