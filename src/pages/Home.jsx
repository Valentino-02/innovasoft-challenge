import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Stack, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

import { useStateContext } from '../context'
import { getListClients } from '../services/client';

const Home = () => {
  const { userInfo } = useStateContext()

  const handleClick = () => {
    let userData = {
        usuarioId: userInfo.userid
    }

    console.log()
    //getListClients(userData).then((res) => console.log(res))
  }

  return (
    <Stack alignItems='center' spacing={2}>
      <HomeIcon sx={{ fontSize: 100 }} />
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='h3'>{userInfo.username}</Typography>
      <Typography variant='body'>You can check your clients data in</Typography>
      <Link to="/client-query">Clients Query</Link>
      <Button onClick={handleClick}>
        Click me
      </Button>

      
    </Stack>

  )
}

export default Home