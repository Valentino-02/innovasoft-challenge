import React from 'react'
import { Typography, Stack, Link } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const Home = () => {
  return (
    <Stack alignItems='center' spacing={2}>
      <HomeIcon sx={{ fontSize: 100 }} />
      <Typography variant='h1'>Welcome</Typography>
      <Typography variant='h3'>User Name</Typography>
      <Typography variant='body'>You can check your clients data in</Typography>
      <Link href="/client-query" variant="body">Clients Query</Link>

      
    </Stack>

  )
}

export default Home