import React from 'react'
import { Typography, Stack, Link } from '@mui/material'
import WarningIcon from '@mui/icons-material/Warning';

const Error = () => {
  return (
    <Stack alignItems='center' spacing={2}>
      <WarningIcon sx={{ fontSize: 100 }} />
      <Typography variant='h1'>404</Typography>
      <Typography variant='h3'>Page not found</Typography>
      <Link href="/home" variant="body">Try going back to Home</Link>
      
    </Stack>
  )
}

export default Error