import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Stack } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

import { useStateContext } from '../context'


const Home = () => {
  const { userInfo } = useStateContext()

  return (
    <Stack alignItems='center' spacing={2}>
      <HomeIcon sx={{ fontSize: 100 }} />
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='h3'>{userInfo.username}</Typography>
      <Typography variant='body'>You can check your clients data in</Typography>
      <Link to="/client-query">Clients Query</Link>
    </Stack>

  )
}

export default Home